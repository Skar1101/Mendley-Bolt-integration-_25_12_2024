import React from 'react';
import HeroAnimation from './HeroAnimation';

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-16 relative overflow-hidden">
      <HeroAnimation />
      <div className="absolute bottom-0 left-0 right-0 text-center pb-20 z-5">
        <p className="text-m md:text-l text-gray-300 px-4">
          Your AI friend, helps you feel lighter in moments, not months.
        </p>
      </div>
    </div>
  );
}