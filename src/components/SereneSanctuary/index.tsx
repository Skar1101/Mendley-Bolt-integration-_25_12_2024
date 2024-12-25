import React, { useRef, useState, useEffect } from 'react';
import { Timer, Wind, Music, Gamepad2, Sparkles } from 'lucide-react';
import WellnessCard from './WellnessCard';
import ScrollButton from './ScrollButton';
import ScrollIndicator from './ScrollIndicator';

const wellnessActivities = [
  {
    icon: Timer,
    title: 'Quick Meditation',
    description: 'Find peace in short guided sessions',
    duration: '5-10 min',
    gradient: 'bg-gradient-to-r from-purple-600 to-indigo-600'
  },
  {
    icon: Wind,
    title: 'Quick Relax',
    description: 'Simple breathing exercises & stretches',
    duration: '3-5 min',
    gradient: 'bg-gradient-to-r from-blue-600 to-cyan-600'
  },
  {
    icon: Music,
    title: 'Calming Songs',
    description: 'Curated peaceful melodies',
    duration: '∞ mins',
    gradient: 'bg-gradient-to-r from-pink-600 to-rose-600'
  },
  {
    icon: Gamepad2,
    title: 'Mindful Games',
    description: 'Engaging stress-relief activities',
    duration: '5-15 min',
    gradient: 'bg-gradient-to-r from-amber-600 to-orange-600'
  },
  {
    icon: Sparkles,
    title: 'Mood Twisters',
    description: 'Positive mindset exercises',
    duration: '2-5 min',
    gradient: 'bg-gradient-to-r from-emerald-600 to-teal-600'
  }
];

export default function SereneSanctuary() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftButton(scrollLeft > 0);
    setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    
    const newIndex = Math.round(scrollLeft / (clientWidth / wellnessActivities.length));
    setCurrentIndex(newIndex);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    setIsAutoScrolling(false);
    
    const scrollAmount = 260; // Card width + gap
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  // Auto-scroll animation
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft >= scrollWidth - clientWidth) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scroll('right');
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);
      return () => element.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="mt-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-white mb-1">Serene Sanctuary</h2>
        <p className="text-sm text-gray-400">Find your moment of peace</p>
      </div>

      <div className="relative">
        {showLeftButton && <ScrollButton direction="left" onClick={() => scroll('left')} />}
        {showRightButton && <ScrollButton direction="right" onClick={() => scroll('right')} />}

        <div 
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-3"
          style={{ WebkitOverflowScrolling: 'touch' }}
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          {wellnessActivities.map((activity, index) => (
            <WellnessCard
              key={activity.title}
              {...activity}
              onClick={() => console.log(`Opening ${activity.title}`)}
            />
          ))}
        </div>

        <ScrollIndicator total={wellnessActivities.length} current={currentIndex} />
      </div>
    </div>
  );
}