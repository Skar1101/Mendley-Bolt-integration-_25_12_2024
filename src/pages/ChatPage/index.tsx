import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../utils/auth';
import ChatInterface from './components/ChatInterface';
import ChatOptions from './components/ChatOptions';
import DashboardHeader from '../DashboardPage/components/DashboardHeader';

export default function ChatPage() {
  const location = useLocation();
  const mode = location.state?.mode;
  const session = auth.getSession();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-black">
      <DashboardHeader />
      {mode ? (
        <div className="p-4 md:p-6 max-w-5xl mx-auto">
          <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
            <ChatInterface mode={mode} />
          </div>
        </div>
      ) : (
        <main className="p-6">
          <div className="max-w-5xl mx-auto">
            <ChatOptions />
          </div>
        </main>
      )}
    </div>
  );
}