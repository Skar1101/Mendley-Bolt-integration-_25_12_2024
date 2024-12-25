import React from 'react';

interface Emotion {
  emoji: string;
  name: string;
}

interface EmotionalLandscapeProps {
  emotions: Emotion[];
}

export default function EmotionalLandscape({ emotions }: EmotionalLandscapeProps) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
      <h2 className="text-lg font-medium text-white mb-4">Emotional Landscape</h2>
      <div className="flex flex-wrap gap-4">
        {emotions.map((emotion, index) => (
          <div 
            key={index}
            className="flex items-center space-x-2 bg-gray-900/50 px-4 py-2 rounded-lg"
          >
            <span className="text-2xl">{emotion.emoji}</span>
            <span className="text-gray-300">{emotion.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}