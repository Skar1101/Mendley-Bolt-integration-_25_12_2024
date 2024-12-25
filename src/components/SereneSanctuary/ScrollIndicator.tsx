import React from 'react';

interface ScrollIndicatorProps {
  total: number;
  current: number;
}

export default function ScrollIndicator({ total, current }: ScrollIndicatorProps) {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            i === current ? 'bg-purple-500 w-3' : 'bg-gray-600'
          }`}
        />
      ))}
    </div>
  );
}