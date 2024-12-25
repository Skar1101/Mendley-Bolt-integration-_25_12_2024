import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mental Health Advocate",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      content: "Mendley has been a game-changer for my emotional well-being. It's like having a friend who's always there to listen and understand.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      content: "The journaling features helped me process my thoughts during stressful projects. It's incredible how intuitive and helpful the AI responses are.",
      rating: 5
    },
    {
      name: "Emma Williams",
      role: "Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      content: "As a student dealing with anxiety, Mendley has been my go-to companion. The Soulspace feature is particularly calming during exam seasons.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-400 text-lg">
            Real stories from people who found emotional support with Mendley
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}