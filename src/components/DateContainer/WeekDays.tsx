import React from 'react';

interface WeekDayProps {
  letter: string;
  isToday: boolean;
  date: number;
}

function WeekDay({ letter, isToday, date }: WeekDayProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
          isToday
            ? 'bg-purple-600 text-white'
            : 'text-gray-400 hover:bg-gray-800/50'
        }`}
      >
        {date}
      </div>
      <span className={`text-xs ${isToday ? 'text-purple-500' : 'text-gray-500'}`}>
        {letter}
      </span>
    </div>
  );
}

export default function WeekDays() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const date = today.getDate();

  // Get dates for the week
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(date - dayOfWeek + i);
    return d.getDate();
  });

  const days = [
    { letter: 'S', day: 0, name: 'Sun' },
    { letter: 'M', day: 1, name: 'Mon' },
    { letter: 'T', day: 2, name: 'Tue' },
    { letter: 'W', day: 3, name: 'Wed' },
    { letter: 'T', day: 4, name: 'Thu' },
    { letter: 'F', day: 5, name: 'Fri' },
    { letter: 'S', day: 6, name: 'Sat' },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-6">
        {days.map((day, index) => (
          <WeekDay
            key={day.name} // Using full day name as key to ensure uniqueness
            letter={day.letter}
            isToday={dayOfWeek === day.day}
            date={weekDates[index]}
          />
        ))}
      </div>
    </div>
  );
}