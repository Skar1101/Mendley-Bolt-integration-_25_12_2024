import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Compass, BookOpen } from 'lucide-react';

export default function HeroCards() {
  const navigate = useNavigate();

  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Ana - Chat Buddy Card */}
        <div 
          className="relative group cursor-pointer"
          onClick={() => navigate('/chat')}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-purple-500/20 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center mb-4">
                <MessageCircle className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Ana</h3>
              <p className="text-gray-400 text-sm">Your all time friend</p>
            </div>
          </div>
        </div>

        {/* Rest of the cards remain unchanged */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-blue-500/20 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center mb-4">
                <Compass className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Soul Space</h3>
              <p className="text-gray-400 text-sm">Where you reflect yourself</p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-emerald-500/20 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 flex items-center justify-center mb-4">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Journal</h3>
              <p className="text-gray-400 text-sm">AI powered journal to keep you going</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}