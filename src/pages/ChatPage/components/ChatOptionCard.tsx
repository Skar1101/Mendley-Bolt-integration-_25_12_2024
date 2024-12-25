import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ChatOptionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  borderGradient: string;
  onClick: () => void;
}

export default function ChatOptionCard({
  icon: Icon,
  title,
  description,
  gradient,
  borderGradient,
  onClick
}: ChatOptionCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left transition-transform duration-300 hover:scale-[1.02] focus:outline-none"
    >
      <div className={`relative p-6 rounded-xl bg-gradient-to-br ${gradient}`}>
        <div className={`absolute inset-0 rounded-xl border border-gradient-to-r ${borderGradient}`} />
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </button>
  );
}