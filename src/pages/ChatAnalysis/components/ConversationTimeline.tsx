import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ana';
  timestamp: Date;
}

interface ConversationTimelineProps {
  messages: Message[];
}

export default function ConversationTimeline({ messages }: ConversationTimelineProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left"
      >
        <h2 className="text-xl font-semibold text-white">Conversation Timeline</h2>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isExpanded ? 'transform rotate-180' : ''
          }`} 
        />
      </button>

      {isExpanded && (
        <div className="mt-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-purple-900/20 border border-purple-500/20'
                  : 'bg-gray-900/50'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-gray-400">
                  {message.sender === 'user' ? 'You' : 'Ana'}
                </span>
                <span className="text-xs text-gray-500">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <p className="text-gray-300">{message.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}