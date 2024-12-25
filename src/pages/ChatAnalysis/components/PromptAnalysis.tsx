import React from 'react';
import { CHAT_PROMPTS } from '../../../prompts/chat-prompts';

interface Message {
  text: string;
  sender: 'user' | 'ana';
}

interface PromptAnalysisProps {
  mode: string;
  messages: Message[];
}

export default function PromptAnalysis({ mode, messages }: PromptAnalysisProps) {
  const prompt = CHAT_PROMPTS[mode as keyof typeof CHAT_PROMPTS];
  
  // Parse sections from the prompt
  const sections = prompt?.split('---').map(section => {
    const lines = section.trim().split('\n');
    const title = lines[0].replace(/#/g, '').trim();
    const content = lines.slice(1).join('\n').trim();
    return { title, content };
  });

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Prompt Analysis</h2>
      </div>

      <div className="space-y-6">
        {sections?.map((section, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-medium text-white">{section.title}</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 whitespace-pre-wrap">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}