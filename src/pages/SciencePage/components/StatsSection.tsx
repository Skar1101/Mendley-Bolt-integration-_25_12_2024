import React from 'react';

interface Stat {
  symptom: string;
  improvement: number;
}

interface Testimonial {
  quote: string;
  author: string;
}

interface StatsSectionProps {
  stats: Stat[];
  testimonials: Testimonial[];
}

export default function StatsSection({ stats, testimonials }: StatsSectionProps) {
  return (
    <section className="py-12 bg-black/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-left mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">Real-Life Impact</h2>
          <p className="text-gray-400 text-base leading-relaxed">
            See how Mendley has helped improve mental health symptoms across our user base
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {stats.map((stat) => (
            <div 
              key={stat.symptom} 
              className="bg-gray-900/30 p-5 rounded-xl border border-gray-800/50"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-base text-gray-300">{stat.symptom}</span>
                <span className="text-base font-medium text-purple-400">
                  {stat.improvement}% report improvement
                </span>
              </div>
              <div className="bg-gray-800 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${stat.improvement}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <blockquote 
              key={index} 
              className="bg-gray-900/30 p-6 rounded-xl border-l-4 border-purple-500"
            >
              <p className="text-gray-300 text-base italic leading-relaxed mb-3">
                {testimonial.quote}
              </p>
              <footer className="text-purple-400 text-sm font-medium">{testimonial.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}