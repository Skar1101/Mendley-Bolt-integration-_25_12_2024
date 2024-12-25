import React, { useState } from 'react';
import { format } from 'date-fns';
import { ChevronDown, MessageCircle, Trash2 } from 'lucide-react';
import { chatStorage } from '../../../utils/chat-storage';

interface MemoryTimelineProps {
  memories: Array<{
    id: string;
    mode: string;
    messages: Array<{
      text: string;
      sender: string;
      timestamp: Date;
    }>;
    analysis: {
      headline: string;
      analysis: string;
      keyInsight: string;
      emotions: Array<{ emoji: string; name: string }>;
      suggestions: string[];
    };
    timestamp: Date;
  }>;
}

export default function MemoryTimeline({ memories }: MemoryTimelineProps) {
  const [expandedMemory, setExpandedMemory] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this memory?')) {
      chatStorage.deleteChat(id);
      window.location.reload();
    }
  };

  const groupedMemories = memories.reduce((acc, memory) => {
    const date = format(memory.timestamp, 'MMM d, yyyy');
    if (!acc[date]) acc[date] = [];
    acc[date].push(memory);
    return acc;
  }, {} as Record<string, typeof memories>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedMemories).map(([date, dayMemories]) => (
        <div key={date}>
          <h2 className="text-lg font-semibold text-white mb-4">{date}</h2>
          <div className="space-y-4">
            {dayMemories.map((memory) => (
              <div 
                key={memory.id}
                className="bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {memory.analysis.headline}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{memory.mode}</span>
                        <span>•</span>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {memory.messages.length} messages
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(memory.id)}
                      className="text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-300">{memory.analysis.keyInsight}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {memory.analysis.emotions.map((emotion, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-1 bg-gray-800/50 px-3 py-1 rounded-full"
                      >
                        <span>{emotion.emoji}</span>
                        <span className="text-sm text-gray-300">{emotion.name}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setExpandedMemory(
                      expandedMemory === memory.id ? null : memory.id
                    )}
                    className="flex items-center text-purple-400 hover:text-purple-300"
                  >
                    <span className="mr-2">
                      {expandedMemory === memory.id ? 'Show less' : 'Show more'}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform ${
                        expandedMemory === memory.id ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                {expandedMemory === memory.id && (
                  <div className="border-t border-gray-800 p-6 bg-gray-900/60">
                    <div className="mb-6">
                      <h4 className="text-lg font-medium text-white mb-2">Analysis</h4>
                      <p className="text-gray-300">{memory.analysis.analysis}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-medium text-white mb-2">Suggestions</h4>
                      <ul className="space-y-2">
                        {memory.analysis.suggestions.map((suggestion, index) => (
                          <li 
                            key={index}
                            className="flex items-start space-x-2 text-gray-300"
                          >
                            <span className="text-purple-400">•</span>
                            <span>{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Conversation</h4>
                      <div className="space-y-4">
                        {memory.messages.map((message, index) => (
                          <div
                            key={index}
                            className={`p-4 rounded-lg ${
                              message.sender === 'user'
                                ? 'bg-purple-900/20 border border-purple-500/20'
                                : 'bg-gray-800/50'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <span className="text-sm font-medium text-gray-400">
                                {message.sender === 'user' ? 'You' : 'Ana'}
                              </span>
                              <span className="text-xs text-gray-500">
                                {format(new Date(message.timestamp), 'h:mm a')}
                              </span>
                            </div>
                            <p className="text-gray-300">{message.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}