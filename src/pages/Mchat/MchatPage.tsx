import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../utils/auth';
import ChatWindow from './components/ChatWindow';
import DashboardHeader from '../DashboardPage/components/DashboardHeader';

export default function MchatPage() {
  const location = useLocation();
  const mode = location.state?.mode || 'Friendly Chat'; // Default to Friendly Chat if no mode provided
  const session = auth.getSession();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-black">
      <DashboardHeader />
      <main className="p-4 md:p-6">
        <div className="max-w-5xl mx-auto">
          <ChatWindow mode={mode} />
        </div>
      </main>
    </div>
  );
}