import React from 'react';

export default function VoiceInterface() {
  return (
    <div className="bg-[#1a1b26] p-4 rounded-xl">
      <div className="flex flex-col items-center">
        <div className="w-full flex justify-center items-center space-x-1 mb-4">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-purple-500"
              style={{
                height: `${Math.sin(i / 2) * 20 + 25}px`,
                opacity: Math.sin(i / 2) * 0.5 + 0.5
              }}
            ></div>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button className="w-8 h-8 rounded-full bg-gray-700"></button>
          <button className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-700"></button>
        </div>
      </div>
    </div>
  );
}