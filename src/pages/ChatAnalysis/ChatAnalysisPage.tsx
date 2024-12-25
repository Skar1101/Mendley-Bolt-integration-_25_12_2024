import React, { useState, useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import DashboardHeader from '../DashboardPage/components/DashboardHeader';
import AnalysisHeader from './components/AnalysisHeader';
import AnalysisSummary from './components/AnalysisSummary';
import EmotionalLandscape from './components/EmotionalLandscape';
import ActionableSuggestions from './components/ActionableSuggestions';
import ConversationTimeline from './components/ConversationTimeline';
import { analyzeConversation } from '../../utils/chat-analysis';
import { chatStorage } from '../../utils/chat-storage';

interface Analysis {
  headline: string;
  analysis: string;
  keyInsight: string;
  emotions: Array<{ emoji: string; name: string; }>;
  suggestions: string[];
}

export default function ChatAnalysisPage() {
  const location = useLocation();
  const { messages, mode } = location.state || {};
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const performAnalysis = async () => {
      if (!messages) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const result = await analyzeConversation(messages);
        setAnalysis(result);
        // Save to local storage
        chatStorage.saveChat(mode, messages, result);
      } catch (err) {
        setError('Failed to analyze conversation. Please try again.');
        console.error('Analysis error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    performAnalysis();
  }, [messages, mode]);

  if (!messages) {
    return <Navigate to="/chat" replace />;
  }

  const duration = messages.length > 1 
    ? Math.round((messages[messages.length - 1].timestamp.getTime() - messages[0].timestamp.getTime()) / 1000 / 60)
    : 0;

  return (
    <div className="min-h-screen bg-black">
      <DashboardHeader />
      <main className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <AnalysisHeader 
              mode={mode}
              duration={duration}
              messageCount={messages.length}
            />

            {isLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
                <p className="text-gray-400">Analyzing conversation...</p>
              </div>
            ) : error ? (
              <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-4 text-red-400 text-center">
                {error}
              </div>
            ) : analysis ? (
              <>
                <AnalysisSummary 
                  headline={analysis.headline}
                  analysis={analysis.analysis}
                  keyInsight={analysis.keyInsight}
                />

                <EmotionalLandscape emotions={analysis.emotions} />
                
                <ActionableSuggestions suggestions={analysis.suggestions} />

                <ConversationTimeline messages={messages} />
              </>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}