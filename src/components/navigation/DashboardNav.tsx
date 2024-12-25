import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Compass, Clock } from 'lucide-react';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/discover', label: 'Discover', icon: Compass },
  { path: '/memories', label: 'Memories', icon: Clock },
];

export default function DashboardNav() {
  const location = useLocation();

  return (
    <nav className="bg-gray-900/60 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center space-x-8">
          {navItems.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                  isActive
                    ? 'border-purple-500 text-purple-500'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}