import React from 'react';
import { FileText } from 'lucide-react';

interface ChatSummaryProps {
  summary: string;
  highlights: string[];
}

export default function ChatSummary({ summary, highlights }: ChatSummaryProps) {
  return (
    <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center">
          <FileText className="w-5 h-5 text-purple-500" />
        </div>
        <h2 className="text-xl font-semibold text-white">Chat Summary</h2>
      </div>
      
      <p className="text-gray-300 mb-6">{summary}</p>
      
      {highlights.length > 0 && (
        <div>
          <h3 className="text-lg font-medium text-white mb-3">Key Moments</h3>
          <div className="space-y-2">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-purple-600/10 border border-purple-500/20 rounded-lg p-3"
              >
                <p className="text-gray-300">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}