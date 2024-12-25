import React from 'react';

interface Message {
  text: string;
  sender: 'user' | 'ana';
}

interface ResponseAnalysisProps {
  messages: Message[];
}

export default function ResponseAnalysis({ messages }: ResponseAnalysisProps) {
  const anaMessages = messages.filter(m => m.sender === 'ana');
  
  const metrics = {
    averageLength: Math.round(
      anaMessages.reduce((acc, msg) => acc + msg.text.split(' ').length, 0) / anaMessages.length
    ),
    questionCount: anaMessages.filter(msg => msg.text.includes('?')).length,
    emotionalWords: anaMessages.filter(msg => 
      msg.text.toLowerCase().match(/feel|emotion|understand|support|help|care/)
    ).length,
  };

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold text-white mb-6">Response Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-gray-900/50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400 mb-1">Average Response Length</h3>
          <p className="text-2xl font-semibold text-white">{metrics.averageLength} words</p>
        </div>
        
        <div className="p-4 bg-gray-900/50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400 mb-1">Questions Asked</h3>
          <p className="text-2xl font-semibold text-white">{metrics.questionCount}</p>
        </div>
        
        <div className="p-4 bg-gray-900/50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400 mb-1">Emotional Support</h3>
          <p className="text-2xl font-semibold text-white">{metrics.emotionalWords}</p>
        </div>
      </div>
    </div>
  );
}