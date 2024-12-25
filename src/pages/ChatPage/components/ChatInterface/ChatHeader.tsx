import React from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ChatHeaderProps {
  mode: string;
}

export default function ChatHeader({ mode }: ChatHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="p-4 border-b border-gray-800">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <h2 className="text-xl font-semibold text-white">Ana</h2>
            <button 
              onClick={() => navigate('/chat')}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-400">{mode}</span>
          </div>
        </div>
      </div>
    </div>
  );
}