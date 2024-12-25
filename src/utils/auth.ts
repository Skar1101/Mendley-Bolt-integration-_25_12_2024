import { hash, verify } from './crypto';

export interface User {
  username: string;
  email: string;
  password: string;
  createdAt: number;
}

export interface Session {
  userId: string;
  token: string;
  expiresAt: number;
}

const USERS_KEY = 'mendley_users';
const SESSION_KEY = 'mendley_session';

// Helper function to get users from storage
function getUsers(): User[] {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
}

export const auth = {
  // User registration
  async register(username: string, email: string, password: string): Promise<User> {
    const users = getUsers();
    
    // Validate email uniqueness
    if (users.some(u => u.email === email)) {
      throw new Error('Email already exists');
    }

    const hashedPassword = await hash(password);
    const user: User = {
      username,
      email,
      password: hashedPassword,
      createdAt: Date.now()
    };

    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return user;
  },

  // User login
  async login(email: string, password: string, remember: boolean = false): Promise<boolean> {
    const users = getUsers();
    const user = users.find(u => u.email === email);
    
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isValid = await verify(password, user.password);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    // Create session with longer expiration for "remember me"
    const session: Session = {
      userId: user.email,
      token: crypto.randomUUID(),
      expiresAt: remember ? 
        Date.now() + (30 * 24 * 60 * 60 * 1000) : // 30 days
        Date.now() + (24 * 60 * 60 * 1000)        // 24 hours
    };

    // Store session in localStorage
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      // Also store in sessionStorage for tab persistence
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } catch (error) {
      console.error('Error storing session:', error);
      return false;
    }

    return true;
  },

  // Get current session
  getSession(): Session | null {
    // Try getting session from sessionStorage first (tab-specific)
    let session = sessionStorage.getItem(SESSION_KEY);
    if (!session) {
      // Fall back to localStorage (cross-tab)
      session = localStorage.getItem(SESSION_KEY);
    }
    
    if (!session) return null;

    try {
      const parsedSession: Session = JSON.parse(session);
      
      // Check if session is expired
      if (parsedSession.expiresAt < Date.now()) {
        this.logout();
        return null;
      }

      // Refresh session in both storages
      localStorage.setItem(SESSION_KEY, session);
      sessionStorage.setItem(SESSION_KEY, session);
      
      return parsedSession;
    } catch (error) {
      console.error('Error parsing session:', error);
      this.logout();
      return null;
    }
  },

  // Logout
  logout(): void {
    localStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_KEY);
  }
};