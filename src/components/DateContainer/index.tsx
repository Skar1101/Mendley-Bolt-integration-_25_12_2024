import React from 'react';
import CurrentDate from './CurrentDate';
import WeekDays from './WeekDays';

export default function DateContainer() {
  return (
    <div className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl">
      <CurrentDate />
      <WeekDays />
    </div>
  );
}