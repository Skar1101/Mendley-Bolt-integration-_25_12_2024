import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const testimonialImages = [
  {
    url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    name: "Professional 1"
  },
  {
    url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    name: "Professional 2"
  },
  {
    url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    name: "Professional 3"
  },
  {
    url: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    name: "Professional 4"
  }
];

export default function PhoneCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonialImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Track Your Progress
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Monitor your emotional well-being with detailed weekly reports and insights. 
              Understand patterns, celebrate progress, and identify areas for growth.
            </p>
            <button 
              onClick={() => navigate('/login')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-base font-medium transition-colors"
            >
              Try it free
            </button>
          </div>

          {/* Phone frame with carousel */}
          <div className="flex-1 relative">
            <div className="relative mx-auto w-[280px] h-[580px]">
              {/* Phone frame */}
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] border-4 border-gray-800 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-t-[3rem]">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full" />
                </div>
                {/* Screen content */}
                <div className="absolute top-6 inset-x-0 bottom-0 bg-white rounded-b-[2.8rem] overflow-hidden">
                  <div className="relative h-full transition-transform duration-500 ease-in-out"
                       style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    <div className="absolute inset-0 flex">
                      {testimonialImages.map((image, index) => (
                        <img
                          key={index}
                          src={image.url}
                          alt={image.name}
                          className="w-full h-full object-cover flex-shrink-0"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}