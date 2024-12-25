import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import EndSessionDialog from './EndSessionDialog';
import { getChatResponse } from '../../../../utils/chat-service';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ana';
  timestamp: Date;
}

interface ChatInterfaceProps {
  mode: string;
}

export default function ChatInterface({ mode }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showEndDialog, setShowEndDialog] = useState(false);
  const navigate = useNavigate();

  const handleSendMessage = async (text: string) => {
    if (isLoading) return;

    const userMessage = {
      id: crypto.randomUUID(),
      text,
      sender: 'user' as const,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await getChatResponse(text, mode);
      const anaMessage = {
        id: crypto.randomUUID(),
        text: response,
        sender: 'ana' as const,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, anaMessage]);
    } catch (error) {
      const errorMessage = {
        id: crypto.randomUUID(),
        text: "I'm sorry, I couldn't process your message. Please try again.",
        sender: 'ana' as const,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEndSession = () => {
    setShowEndDialog(true);
  };

  const confirmEndSession = () => {
    const endMessage = {
      id: crypto.randomUUID(),
      text: "Thank you for chatting with me. I'll prepare a summary of our conversation.",
      sender: 'ana' as const,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, endMessage]);
    
    // Navigate to analysis page with chat data
    setTimeout(() => {
      navigate('/chat-analysis', { 
        state: { 
          messages,
          mode 
        }
      });
    }, 2000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-theme(spacing.32))]">
      <ChatHeader mode={mode} />
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex flex-col">
          <ChatMessages messages={messages} isLoading={isLoading} />
          <ChatInput 
            onSendMessage={handleSendMessage}
            onEndSession={handleEndSession}
            isSessionStarted={messages.length > 0}
            disabled={isLoading}
          />
        </div>
      </div>
      <EndSessionDialog 
        isOpen={showEndDialog}
        onConfirm={confirmEndSession}
        onCancel={() => setShowEndDialog(false)}
      />
    </div>
  );
}