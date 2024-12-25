import React, { useState } from 'react';
import { useMoodContext } from '../context/MoodContext';

export default function MoodNote() {
  const { selectedMood, note, setNote, saveMoodEntry } = useMoodContext();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSave = async () => {
    if (!selectedMood) return;
    
    await saveMoodEntry();
    setIsSuccess(true);
    
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6">
      <div className="mb-4">
        <label htmlFor="note" className="block text-sm font-medium text-gray-300 mb-2">
          What's on your mind? (optional)
        </label>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          maxLength={280}
          placeholder="Share your thoughts..."
          className="w-full h-24 bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <div className="text-right text-sm text-gray-500 mt-1">
          {note.length}/280
        </div>
      </div>

      <button
        onClick={handleSave}
        disabled={!selectedMood}
        className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-2 px-4 rounded-lg transition-colors"
      >
        Save Mood
      </button>

      {isSuccess && (
        <div className="mt-4 p-3 bg-green-500/10 border border-green-500/50 text-green-500 rounded-lg text-sm text-center">
          Mood saved successfully!
        </div>
      )}
    </div>
  );
}