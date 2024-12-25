import React, { useEffect, useRef } from 'react';
import LoadingIndicator from './LoadingIndicator';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ana';
  timestamp: Date;
}

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

export default function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.length === 0 && (
        <div className="text-center text-gray-400 mt-8">
          <p>Start a conversation with Ana</p>
          <p className="text-sm mt-2">Your chat history will appear here</p>
        </div>
      )}
      
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] rounded-lg p-3 ${
              message.sender === 'user'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-100'
            }`}
          >
            <p className="whitespace-pre-wrap">{message.text}</p>
            <span className="text-xs opacity-70 mt-1 block">
              {message.timestamp.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </span>
          </div>
        </div>
      ))}
      
      {isLoading && (
        <div className="flex justify-start">
          <LoadingIndicator />
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
}