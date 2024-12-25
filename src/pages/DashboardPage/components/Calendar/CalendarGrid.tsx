import React from 'react';

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function CalendarGrid() {
  // Get current day of week (0 = Sunday, 1 = Monday, etc.)
  const today = new Date().getDay();

  return (
    <div className="flex items-center justify-center gap-3">
      {days.map((day, index) => (
        <div
          key={`${day}-${index}`}
          className={`
            w-8 h-8 rounded-full flex items-center justify-center
            text-sm font-medium transition-all
            ${index === today 
              ? 'bg-purple-600 text-white relative' 
              : 'text-gray-400 hover:text-gray-300'
            }
          `}
        >
          {day}
          {index === today && (
            <div className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-purple-600" />
          )}
        </div>
      ))}
    </div>
  );
}