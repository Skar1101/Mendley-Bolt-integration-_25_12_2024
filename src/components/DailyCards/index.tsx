import React from 'react';
import { Sunrise, Sunset } from 'lucide-react';

export default function DailyCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Morning Plan Card */}
      <div className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 flex items-center justify-center mb-4">
            <Sunrise className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Morning Plan</h3>
          <p className="text-gray-400 text-sm">Start your day with intention</p>
        </div>
      </div>

      {/* Evening Reflection Card */}
      <div className="bg-gradient-to-br from-purple-500/10 to-indigo-600/10 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 flex items-center justify-center mb-4">
            <Sunset className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Evening Reflection</h3>
          <p className="text-gray-400 text-sm">Review and reflect on your day</p>
        </div>
      </div>
    </div>
  );
}