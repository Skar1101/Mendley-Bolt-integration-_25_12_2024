import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { LogOut, Bell, LayoutDashboard, Compass, Clock } from 'lucide-react';
import { auth } from '../../../utils/auth';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/discover', label: 'Discover', icon: Compass },
  { path: '/memories', label: 'Memories', icon: Clock },
];

export default function DashboardHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="px-4 py-3 flex items-center">
        <h1 className="text-xl font-bold text-white w-48">Mendley</h1>
        
        {/* Centered Navigation Tabs */}
        <nav className="flex-1 flex items-center justify-center space-x-8">
          {navItems.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center space-x-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-purple-500'
                    : 'text-gray-400 hover:text-white'
                }`
              }
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-4 w-48 justify-end">
          <button className="text-gray-400 hover:text-white">
            <Bell className="h-5 w-5" />
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-400 hover:text-white"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}