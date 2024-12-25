import React from 'react';
import CalendarGrid from './CalendarGrid';

export default function Calendar() {
  return (
    <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 mb-6">
      <CalendarGrid />
    </div>
  );
}