import React, { createContext, useContext, useState, useEffect } from 'react';

interface Mood {
  emoji: string;
  name: string;
  color: string;
}

interface MoodEntry {
  mood: Mood;
  note: string;
  timestamp: number;
}

interface MoodContextType {
  selectedMood: Mood | null;
  setSelectedMood: (mood: Mood) => void;
  note: string;
  setNote: (note: string) => void;
  moodHistory: MoodEntry[];
  saveMoodEntry: () => Promise<void>;
}

const MoodContext = createContext<MoodContextType | undefined>(undefined);

export function MoodProvider({ children }: { children: React.ReactNode }) {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [note, setNote] = useState('');
  const [moodHistory, setMoodHistory] = useState<MoodEntry[]>([]);

  // Load mood history on mount
  useEffect(() => {
    const history = localStorage.getItem('mood_history');
    if (history) {
      setMoodHistory(JSON.parse(history));
    }
  }, []);

  const saveMoodEntry = async () => {
    if (!selectedMood) return;

    const newEntry: MoodEntry = {
      mood: selectedMood,
      note,
      timestamp: Date.now(),
    };

    // Keep only the last 7 days of entries
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const updatedHistory = [
      newEntry,
      ...moodHistory.filter(entry => entry.timestamp > weekAgo),
    ];

    setMoodHistory(updatedHistory);
    localStorage.setItem('mood_history', JSON.stringify(updatedHistory));

    // Reset form
    setSelectedMood(null);
    setNote('');
  };

  return (
    <MoodContext.Provider
      value={{
        selectedMood,
        setSelectedMood,
        note,
        setNote,
        moodHistory,
        saveMoodEntry,
      }}
    >
      {children}
    </MoodContext.Provider>
  );
}

export function useMoodContext() {
  const context = useContext(MoodContext);
  if (context === undefined) {
    throw new Error('useMoodContext must be used within a MoodProvider');
  }
  return context;
}