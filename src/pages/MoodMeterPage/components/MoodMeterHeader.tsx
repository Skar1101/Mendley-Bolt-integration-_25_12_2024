import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard } from 'lucide-react';

export default function MoodMeterHeader() {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate('/dashboard')}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <LayoutDashboard className="h-5 w-5" />
        </button>
        
        <h1 className="text-xl font-bold text-white">MoodMeter</h1>
        
        <div className="w-5" /> {/* Spacer for alignment */}
      </div>
    </header>
  );
}