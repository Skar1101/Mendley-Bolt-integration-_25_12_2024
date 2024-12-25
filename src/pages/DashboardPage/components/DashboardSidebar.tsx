import React from 'react';
import { Home, MessageCircle, Calendar, Settings } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home' },
  { icon: MessageCircle, label: 'Chat' },
  { icon: Calendar, label: 'Journal' },
  { icon: Settings, label: 'Settings' }
];

export default function DashboardSidebar() {
  return (
    <aside className="w-64 bg-gray-900 min-h-screen p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center space-x-3 text-gray-400 hover:text-white hover:bg-gray-800 w-full p-3 rounded-lg transition-colors"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}