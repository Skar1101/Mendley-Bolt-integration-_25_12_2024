import React from 'react';
import { Lock, Target } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Your companion for holistic personal growth
          </h2>
          <p className="text-gray-400 text-lg">
            Mendley combines journaling, habit-building, and emotional support in one integrated platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Connect the dots */}
            <div className="feature-container bg-gray-900/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Connect the dots</h3>
              <p className="text-gray-400 mb-6">
                Mendley remembers and can help you make sense of it all.
              </p>
              <img 
                src="/chat-interface.png" 
                alt="Chat Interface" 
                className="w-full rounded-2xl"
              />
            </div>

            {/* Private and secure */}
            <div className="feature-container bg-gray-900/30 rounded-3xl p-8">
              <Lock className="h-6 w-6 text-gray-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Private and secure</h3>
              <p className="text-gray-400">
                Your data is encrypted in transit and at rest to protect your privacy.
              </p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-6">
            {/* Build resilience */}
            <div className="feature-container bg-gray-900/30 rounded-3xl p-8" style={{ animationDelay: '0.2s' }}>
              <div className="text-pink-400 text-2xl mb-4">♡</div>
              <h3 className="text-2xl font-bold text-white mb-2">Build resilience</h3>
              <p className="text-gray-400">
                Manage stress more effectively and improve your relationships.
              </p>
            </div>

            {/* Speak freely */}
            <div className="feature-container bg-gray-900/30 rounded-3xl p-8" style={{ animationDelay: '0.4s' }}>
              <img 
                src="/voice-interface.png" 
                alt="Voice Interface" 
                className="w-full rounded-2xl mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Speak freely</h3>
              <p className="text-gray-400">
                Voice your truth without worrying about burdening others.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Uncover your patterns */}
            <div className="feature-container bg-gray-900/30 rounded-3xl p-8" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold text-white mb-2">Uncover your patterns</h3>
              <p className="text-gray-400 mb-6">
                Receive in-depth reports highlighting your progress every week.
              </p>
              <img 
                src="/weekly-reflection.png" 
                alt="Weekly Reflection" 
                className="w-full rounded-2xl"
              />
            </div>

            {/* Reach your goals */}
            <div className="feature-container bg-gray-900/30 rounded-3xl p-8" style={{ animationDelay: '0.8s' }}>
              <Target className="h-6 w-6 text-gray-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Reach your goals</h3>
              <p className="text-gray-400">
                Identify the right goals for you and remove the obstacles in the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}