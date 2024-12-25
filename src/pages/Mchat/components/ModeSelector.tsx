import React from 'react';
import { Brain, Heart, Zap, Sparkles } from 'lucide-react';

const MODES = [
  { id: 'DEFAULT', icon: Brain, label: 'General Chat', color: 'text-blue-500' },
  { id: 'EMOTIONAL_SUPPORT', icon: Heart, label: 'Emotional Support', color: 'text-pink-500' },
  { id: 'PRODUCTIVITY', icon: Zap, label: 'Productivity Coach', color: 'text-yellow-500' },
  { id: 'CREATIVE', icon: Sparkles, label: 'Creative Mode', color: 'text-purple-500' }
];

interface ModeSelectorProps {
  selectedMode: string;
  onModeChange: (mode: string) => void;
}

export default function ModeSelector({ selectedMode, onModeChange }: ModeSelectorProps) {
  return (
    <div className="flex space-x-4">
      {MODES.map(({ id, icon: Icon, label, color }) => (
        <button
          key={id}
          onClick={() => onModeChange(id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            selectedMode === id
              ? 'bg-purple-600 text-white'
              : `bg-white ${color} hover:bg-gray-50`
          }`}
        >
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}