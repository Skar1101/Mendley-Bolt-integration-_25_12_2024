import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Calendar as CalendarIcon, Heart, Compass } from 'lucide-react';

export default function DashboardContent() {
  const navigate = useNavigate();

  return (
    <main className="p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Quick Chat */}
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">Quick Chat</h3>
              <Sparkles className="h-5 w-5 text-purple-500" />
            </div>
            <p className="text-gray-400 text-sm mb-4">Start a conversation with your AI companion</p>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors text-sm">
              Start Conversation
            </button>
          </div>

          {/* Journal */}
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">Journal</h3>
              <CalendarIcon className="h-5 w-5 text-purple-500" />
            </div>
            <p className="text-gray-400 text-sm mb-4">Write your thoughts and feelings</p>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors text-sm">
              New Entry
            </button>
          </div>

          {/* Mood Meter */}
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">Mood Meter</h3>
              <Heart className="h-5 w-5 text-purple-500" />
            </div>
            <p className="text-gray-400 text-sm mb-4">Track your emotional well-being</p>
            <button 
              onClick={() => navigate('/mood')}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Log Mood
            </button>
          </div>

          {/* Soul Space */}
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">Soul Space</h3>
              <Compass className="h-5 w-5 text-purple-500" />
            </div>
            <p className="text-gray-400 text-sm mb-4">Find peace and mindfulness</p>
            <button 
              onClick={() => navigate('/discover')}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Enter Space
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}