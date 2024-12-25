import React from 'react';
import { LucideIcon } from 'lucide-react';

interface WellnessCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  duration?: string;
  gradient: string;
  onClick: () => void;
}

export default function WellnessCard({ 
  icon: Icon, 
  title, 
  description, 
  duration, 
  gradient,
  onClick 
}: WellnessCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative flex-shrink-0 w-[240px] transition-all duration-500 hover:scale-[1.02] focus:outline-none"
    >
      <div className={`absolute inset-0 ${gradient} rounded-2xl opacity-10`} />
      <div className="relative p-4 bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-white/5">
        <div className="flex flex-col items-start">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-3">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-base font-semibold text-white mb-1">{title}</h3>
          <p className="text-xs text-gray-400 mb-2">{description}</p>
          {duration && (
            <span className="text-xs text-white/60 px-2 py-0.5 bg-white/5 rounded-full">
              {duration}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}