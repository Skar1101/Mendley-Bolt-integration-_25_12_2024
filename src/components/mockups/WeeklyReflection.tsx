import React from 'react';

export default function WeeklyReflection() {
  return (
    <div className="bg-[#1a1b26] p-4 rounded-xl">
      <h4 className="text-white font-medium mb-4">Weekly Reflection</h4>
      <div className="flex items-end space-x-2 h-32">
        {[80, 60, 40, 30, 20, 10].map((height, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-gradient-to-t from-pink-500 to-purple-500 rounded-t"
              style={{ height: `${height}%` }}
            ></div>
            <div className="w-4 h-4 rounded-full bg-gray-600 mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}