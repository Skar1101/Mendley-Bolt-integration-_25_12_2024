import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ActionableSuggestionsProps {
  suggestions: string[];
}

export default function ActionableSuggestions({ suggestions }: ActionableSuggestionsProps) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
      <h2 className="text-lg font-medium text-white mb-4">Suggestions</h2>
      <div className="space-y-3">
        {suggestions.map((suggestion, index) => (
          <div 
            key={index}
            className="flex items-start space-x-3 bg-gray-900/50 p-4 rounded-lg"
          >
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <p className="text-gray-300">{suggestion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}