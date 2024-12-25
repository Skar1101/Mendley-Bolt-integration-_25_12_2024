import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ResearchItem {
  title: string;
  content: string;
  studyUrl?: string;
  additionalInfo?: string;
}

interface ResearchSectionProps {
  title: string;
  subtitle: string;
  items: ResearchItem[];
  expandedSection: string | null;
  onToggleSection: (section: string) => void;
}

export default function ResearchSection({
  title,
  subtitle,
  items,
  expandedSection,
  onToggleSection,
}: ResearchSectionProps) {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-left mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">{title}</h2>
          <p className="text-gray-400 text-base leading-relaxed">{subtitle}</p>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div 
              key={item.title} 
              className="bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800/50 transition-all duration-200 hover:border-purple-500/30"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center"
                onClick={() => onToggleSection(item.title)}
              >
                <span className="text-base md:text-lg font-medium text-white">{item.title}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-purple-500 transition-transform duration-200 ${
                    expandedSection === item.title ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {expandedSection === item.title && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 text-base leading-relaxed mb-4">{item.content}</p>
                  {item.studyUrl && (
                    <a 
                      href={item.studyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex text-purple-400 hover:text-purple-300 text-sm font-medium mb-3 transition-colors"
                    >
                      Read the study →
                    </a>
                  )}
                  {item.additionalInfo && (
                    <p className="text-gray-400 text-sm leading-relaxed">{item.additionalInfo}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}