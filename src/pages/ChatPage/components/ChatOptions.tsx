import React from 'react';
import { MessageCircle, Compass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ChatOptionCard from './ChatOptionCard';

export default function ChatOptions() {
  const navigate = useNavigate();

  const navigateToChat = (mode: string) => {
    // Pass just the base mode name
    navigate('/chat', { state: { mode: mode.split(' ')[0] } });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Chat with Ana</h1>
        <p className="text-gray-400">Choose how you'd like to connect with Ana today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChatOptionCard
          icon={MessageCircle}
          title="Friendly Chat"
          description="Have an open conversation about anything on your mind"
          gradient="from-pink-500/20 to-purple-500/20"
          borderGradient="from-pink-500/30 to-purple-500/30"
          onClick={() => navigateToChat('Friendly')}
        />

        <ChatOptionCard
          icon={Compass}
          title="Guided Journey"
          description="Get structured support for specific challenges"
          gradient="from-blue-500/20 to-cyan-500/20"
          borderGradient="from-blue-500/30 to-cyan-500/30"
          onClick={() => navigateToChat('Guided Journey')}
        />
      </div>
    </div>
  );
}