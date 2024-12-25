import React from 'react';
import { useMoodContext } from '../context/MoodContext';

export default function MoodHistory() {
  const { moodHistory } = useMoodContext();

  if (moodHistory.length === 0) return null;

  return (
    <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Past Week</h2>
      <div className="space-y-4">
        {moodHistory.map((entry) => (
          <div
            key={entry.timestamp}
            className="bg-gray-800/50 rounded-lg p-4 flex items-start space-x-4"
          >
            <span className="text-2xl">{entry.mood.emoji}</span>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <span className="text-white font-medium">{entry.mood.name}</span>
                <span className="text-sm text-gray-400">
                  {new Date(entry.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
              {entry.note && (
                <p className="text-gray-300 text-sm mt-2">{entry.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}