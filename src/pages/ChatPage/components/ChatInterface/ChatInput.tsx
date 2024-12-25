import React, { useState } from 'react';
import { Mic, Phone, Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onEndSession: () => void;
  isSessionStarted: boolean;
  disabled?: boolean;
}

export default function ChatInput({ 
  onSendMessage, 
  onEndSession,
  isSessionStarted, 
  disabled 
}: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="border-t border-gray-800 p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={disabled}
            className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
            placeholder={disabled ? "Ana is typing..." : "What's on your mind?"}
          />
          <button
            type="submit"
            disabled={disabled || !message.trim()}
            className="bg-purple-600 p-2 rounded-full text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>

      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <button className="text-gray-400 hover:text-white p-2" disabled={disabled}>
            <Mic className="w-6 h-6" />
          </button>
          <button className="text-gray-400 hover:text-white p-2" disabled={disabled}>
            <Phone className="w-6 h-6" />
          </button>
        </div>
        
        {isSessionStarted && (
          <button 
            onClick={onEndSession}
            className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
            disabled={disabled}
          >
            End Session
          </button>
        )}
      </div>
    </div>
  );
}