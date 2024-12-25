import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../utils/auth';
import { chatStorage } from '../../utils/chat-storage';
import DashboardHeader from '../DashboardPage/components/DashboardHeader';
import MemoryTimeline from './components/MemoryTimeline';

export default function MemoriesPage() {
  const session = auth.getSession();
  const memories = chatStorage.getChats();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-black">
      <DashboardHeader />
      <main className="p-4 md:p-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Memories</h1>
            <p className="text-gray-400">Your journey of growth and reflection</p>
          </div>
          
          {memories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-4">No memories yet</p>
              <p className="text-sm text-gray-500">
                Your chat conversations and insights will appear here
              </p>
            </div>
          ) : (
            <MemoryTimeline memories={memories} />
          )}
        </div>
      </main>
    </div>
  );
}