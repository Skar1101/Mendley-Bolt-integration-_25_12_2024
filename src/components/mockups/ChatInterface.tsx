import React from 'react';

export default function ChatInterface() {
  return (
    <div className="relative w-full max-w-[300px] mx-auto mt-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a2d3d] to-[#1a1b26] rounded-[40px]"></div>
      <div className="relative bg-[#f8f9fa] rounded-[32px] overflow-hidden mx-4">
        <div className="space-y-2 p-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center space-x-2">
              <span role="img" aria-label="sad" className="text-xl">😔</span>
              <p className="text-[#2d3748] text-[15px]">I'm feeling lost today</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">✧</span>
              <p className="text-[#6e7a8a] text-[15px]">Memory found</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-[#4299e1] text-[15px] leading-relaxed">
              Yesterday, you mentioned drifting apart from old friends. Could this be related to feeling lost today?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}