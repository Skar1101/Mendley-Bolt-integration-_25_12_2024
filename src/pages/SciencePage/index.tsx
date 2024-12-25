import React from 'react';
import { useNavigate } from 'react-router-dom';
import ResearchSection from './components/ResearchSection';
import StatsSection from './components/StatsSection';
import ProcessSection from './components/ProcessSection';
import Breadcrumb from '../../components/navigation/Breadcrumb';
import { journalingResearch, aiResearch } from './data/research';
import { stats, testimonials } from './data/stats';

export default function SciencePage() {
  const [expandedSection, setExpandedSection] = React.useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-black to-purple-900/20">
      {/* Breadcrumb */}
      <div className="bg-black/30 py-4 border-b border-gray-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumb items={[{ label: 'Science' }]} />
        </div>
      </div>

      {/* Rest of the sections... */}

      {/* Build the Future */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Build the Future with Us</h2>
          <p className="text-gray-300 mb-8">
            We continue to collaborate closely with mental health professionals to inform our approach and improve Mendley.
          </p>
          <button 
            onClick={() => navigate('/login')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            Get in touch
          </button>
        </div>
      </section>
    </div>
  );
}