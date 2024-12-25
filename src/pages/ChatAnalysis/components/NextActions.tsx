import React from 'react';
import { CheckCircle } from 'lucide-react';

interface NextActionsProps {
  actions: string[];
}

export default function NextActions({ actions }: NextActionsProps) {
  return (
    <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center">
          <CheckCircle className="w-5 h-5 text-green-500" />
        </div>
        <h2 className="text-xl font-semibold text-white">Next Actions</h2>
      </div>
      
      <div className="space-y-3">
        {actions.map((action, index) => (
          <div 
            key={index}
            className="flex items-center space-x-3 bg-green-600/10 border border-green-500/20 rounded-lg p-4"
          >
            <input
              type="checkbox"
              id={`action-${index}`}
              className="w-5 h-5 rounded border-green-500 text-green-500 focus:ring-green-500"
            />
            <label 
              htmlFor={`action-${index}`}
              className="text-gray-300 flex-1"
            >
              {action}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}