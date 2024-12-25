import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <section id="contact" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-lg">
            We're here to help you on your emotional wellness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-purple-500 mt-1" />
              <div className="ml-4">
                <h3 className="text-white font-semibold mb-1">Email Us</h3>
                <p className="text-gray-400">support@mendley.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MessageCircle className="h-6 w-6 text-purple-500 mt-1" />
              <div className="ml-4">
                <h3 className="text-white font-semibold mb-1">Live Chat</h3>
                <p className="text-gray-400">Available 24/7 for premium users</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-purple-500 mt-1" />
              <div className="ml-4">
                <h3 className="text-white font-semibold mb-1">Location</h3>
                <p className="text-gray-400">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}