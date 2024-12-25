import React from 'react';
import { Lightbulb } from 'lucide-react';

interface ChatInsightsProps {
  insights: string[];
}

export default function ChatInsights({ insights }: ChatInsightsProps) {
  return (
    <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-yellow-600/20 rounded-full flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
        </div>
        <h2 className="text-xl font-semibold text-white">Insights</h2>
      </div>
      
      <div className="grid gap-4">
        {insights.map((insight, index) => (
          <div 
            key={index}
            className="bg-yellow-600/10 border border-yellow-500/20 rounded-lg p-4"
          >
            <p className="text-gray-300">{insight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}