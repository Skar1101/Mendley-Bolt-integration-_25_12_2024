import React from 'react';

interface AnalysisSummaryProps {
  headline: string;
  analysis: string;
  keyInsight: string;
}

export default function AnalysisSummary({ headline, analysis, keyInsight }: AnalysisSummaryProps) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold text-white mb-4">{headline}</h2>
      <p className="text-gray-300 mb-6 leading-relaxed">{analysis}</p>
      
      <div className="bg-purple-900/20 border border-purple-500/20 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-white mb-2">Key Insight</h3>
        <p className="text-gray-300">{keyInsight}</p>
      </div>
    </div>
  );
}