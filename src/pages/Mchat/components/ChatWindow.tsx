import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { getChatResponse } from '../../../utils/chat-service';
import { analyzeChatSession } from '../../../utils/chat-analysis';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatWindowProps {
  mode: string;
}

export default function ChatWindow({ mode }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      content,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await getChatResponse(content, mode);
      const aiMessage: Message = {
        id: crypto.randomUUID(),
        content: response,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting chat response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEndSession = async () => {
    try {
      const chatAnalysis = await analyzeChatSession(messages);
      const endMessage: Message = {
        id: crypto.randomUUID(),
        content: "Thank you for chatting with me. I'll prepare a summary of our conversation.",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, endMessage]);
      
      // Navigate to analysis page with chat data
      setTimeout(() => {
        navigate('/chat-analysis', { 
          state: { 
            chatData: chatAnalysis
          }
        });
      }, 2000);
    } catch (error) {
      console.error('Error ending session:', error);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-theme(spacing.32))] bg-gray-900 rounded-xl overflow-hidden">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-xl font-semibold text-white">{mode}</h2>
      </div>
      
      <MessageList messages={messages} isLoading={isLoading} />
      
      <div className="border-t border-gray-800 p-4">
        <div className="mb-4">
          <MessageInput onSendMessage={handleSendMessage} disabled={isLoading} />
        </div>
        
        {messages.length > 0 && (
          <div className="flex justify-end">
            <button
              onClick={handleEndSession}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              End Session
            </button>
          </div>
        )}
      </div>
    </div>
  );
}