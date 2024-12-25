import React from 'react';
import { useMoodContext } from '../context/MoodContext';

const moods = [
  { emoji: '😊', name: 'Happy', color: 'bg-yellow-500' },
  { emoji: '😢', name: 'Sad', color: 'bg-blue-500' },
  { emoji: '😠', name: 'Angry', color: 'bg-red-500' },
  { emoji: '🤩', name: 'Excited', color: 'bg-pink-500' },
  { emoji: '😴', name: 'Tired', color: 'bg-purple-500' },
  { emoji: '😰', name: 'Anxious', color: 'bg-orange-500' },
  { emoji: '😐', name: 'Neutral', color: 'bg-gray-500' },
];

export default function MoodSelector() {
  const { selectedMood, setSelectedMood } = useMoodContext();

  return (
    <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Today's Mood</h2>
      <div className="grid grid-cols-4 gap-4">
        {moods.map((mood) => (
          <button
            key={mood.name}
            onClick={() => setSelectedMood(mood)}
            className={`aspect-square rounded-xl flex flex-col items-center justify-center transition-all transform hover:scale-105 ${
              selectedMood?.name === mood.name
                ? 'ring-2 ring-purple-500 bg-gray-800'
                : 'bg-gray-900/60 hover:bg-gray-800/60'
            }`}
          >
            <span className="text-4xl mb-2">{mood.emoji}</span>
            <span className="text-sm text-gray-300">{mood.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}