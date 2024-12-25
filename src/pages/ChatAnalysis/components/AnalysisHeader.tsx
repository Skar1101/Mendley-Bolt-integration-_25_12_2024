import React from 'react';
import { ArrowLeft, Clock, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AnalysisHeaderProps {
  mode: string;
  duration: number;
  messageCount: number;
}

export default function AnalysisHeader({ mode, duration, messageCount }: AnalysisHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="mb-8">
      {/* Header with back button */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate('/chat')}
          className="flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Back to Chat</span>
        </button>
        <h1 className="text-2xl font-bold text-white">Chat Analysis</h1>
        <div className="w-24" /> {/* Spacer for alignment */}
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Chat Mode</p>
              <p className="text-lg font-semibold text-white">{mode}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Duration</p>
              <p className="text-lg font-semibold text-white">{duration} minutes</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Messages</p>
              <p className="text-lg font-semibold text-white">{messageCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}