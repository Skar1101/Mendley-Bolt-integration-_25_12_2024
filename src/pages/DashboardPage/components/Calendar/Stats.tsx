import React from 'react';
import { Flame } from 'lucide-react';

interface StatsProps {
  streak: number;
  entries: number;
  words: number;
}

export default function Stats({ streak, entries, words }: StatsProps) {
  return (
    <div className="flex gap-8">
      <div className="flex items-center gap-2">
        <Flame className="w-4 h-4 text-orange-500" />
        <div>
          <div className="text-orange-500 font-medium">{streak} day</div>
          <div className="text-xs text-gray-400">Streak</div>
        </div>
      </div>
      <div>
        <div className="text-white font-medium">{entries}</div>
        <div className="text-xs text-gray-400">Entries</div>
      </div>
      <div>
        <div className="text-white font-medium">{words}</div>
        <div className="text-xs text-gray-400">Words</div>
      </div>
    </div>
  );
}