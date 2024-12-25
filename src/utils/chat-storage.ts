interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ana';
  timestamp: Date;
}

interface ChatAnalysis {
  headline: string;
  analysis: string;
  keyInsight: string;
  emotions: Array<{ emoji: string; name: string; }>;
  suggestions: string[];
}

interface ChatMemory {
  id: string;
  mode: string;
  messages: ChatMessage[];
  analysis: ChatAnalysis;
  timestamp: Date;
}

const STORAGE_KEY = 'mendley_chat_memories';

export const chatStorage = {
  saveChat(mode: string, messages: ChatMessage[], analysis: ChatAnalysis): void {
    const memories = this.getChats();
    const newMemory: ChatMemory = {
      id: crypto.randomUUID(),
      mode,
      messages,
      analysis,
      timestamp: new Date()
    };
    
    memories.unshift(newMemory);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memories));
  },

  getChats(): ChatMemory[] {
    const memories = localStorage.getItem(STORAGE_KEY);
    if (!memories) return [];
    
    return JSON.parse(memories, (key, value) => {
      // Convert date strings back to Date objects
      if (key === 'timestamp') return new Date(value);
      return value;
    });
  },

  deleteChat(id: string): void {
    const memories = this.getChats();
    const filtered = memories.filter(memory => memory.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  }
};