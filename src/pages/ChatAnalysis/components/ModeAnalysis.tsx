import React from 'react';
import { CHAT_PROMPTS } from '../../../prompts/chat-prompts';

interface Message {
  text: string;
  sender: 'user' | 'ana';
}

interface ModeAnalysisProps {
  mode: string;
  messages: Message[];
}

export default function ModeAnalysis({ mode, messages }: ModeAnalysisProps) {
  const prompt = CHAT_PROMPTS[mode as keyof typeof CHAT_PROMPTS];
  const promptLines = prompt?.split('\n').filter(line => line.trim().startsWith('-')) || [];

  // Check if Ana's responses followed the prompt guidelines
  const anaMessages = messages.filter(m => m.sender === 'ana');
  const guidelines = promptLines.map(line => ({
    rule: line.trim().substring(2),
    met: anaMessages.some(msg => 
      line.toLowerCase().includes('question') ? msg.text.includes('?') :
      line.toLowerCase().includes('concise') ? msg.text.split(' ').length < 30 :
      true
    )
  }));

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">Mode Analysis</h2>
      <div className="space-y-3">
        {guidelines.map((guideline, index) => (
          <div 
            key={index}
            className="flex items-center space-x-3 text-sm"
          >
            <div className={`w-2 h-2 rounded-full ${guideline.met ? 'bg-green-500' : 'bg-yellow-500'}`} />
            <span className="text-gray-300">{guideline.rule}</span>
          </div>
        ))}
      </div>
    </div>
  );
}