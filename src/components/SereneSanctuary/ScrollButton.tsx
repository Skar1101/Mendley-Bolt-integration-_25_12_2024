import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

export default function ScrollButton({ direction, onClick }: ScrollButtonProps) {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
  
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${
        direction === 'left' ? '-left-4' : '-right-4'
      } z-10 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center
      hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500`}
    >
      <Icon className="w-5 h-5 text-white" />
    </button>
  );
}