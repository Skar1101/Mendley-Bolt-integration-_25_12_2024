import React from 'react';

export default function LoadingIndicator() {
  return (
    <div className="flex space-x-2 p-3 bg-gray-800 text-gray-100 rounded-lg max-w-[80%]">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
    </div>
  );
}