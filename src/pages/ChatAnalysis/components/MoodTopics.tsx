import React from 'react';
import { Heart, Hash } from 'lucide-react';

interface MoodTopicsProps {
  mood: {
    primary: string;
    secondary: string[];
  };
  topics: string[];
}

export default function MoodTopics({ mood, topics }: MoodTopicsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Mood Section */}
      <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-pink-600/20 rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5 text-pink-500" />
          </div>
          <h2 className="text-xl font-semibold text-white">Mood Analysis</h2>
        </div>
        
        <div className="space-y-4">
          <div className="bg-pink-600/10 border border-pink-500/20 rounded-lg p-4">
            <h3 className="text-white font-medium mb-2">Primary Mood</h3>
            <p className="text-gray-300">{mood.primary}</p>
          </div>
          
          {mood.secondary.length > 0 && (
            <div className="bg-pink-600/10 border border-pink-500/20 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">Secondary Moods</h3>
              <div className="flex flex-wrap gap-2">
                {mood.secondary.map((m, index) => (
                  <span 
                    key={index}
                    className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Topics Section */}
      <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
            <Hash className="w-5 h-5 text-blue-500" />
          </div>
          <h2 className="text-xl font-semibold text-white">Topics Discussed</h2>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {topics.map((topic, index) => (
            <span 
              key={index}
              className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}