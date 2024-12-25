import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../utils/auth';
import MoodMeterHeader from './components/MoodMeterHeader';
import MoodSelector from './components/MoodSelector';
import MoodNote from './components/MoodNote';
import MoodHistory from './components/MoodHistory';
import { MoodProvider } from './context/MoodContext';

export default function MoodMeterPage() {
  const session = auth.getSession();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-black">
      <MoodProvider>
        <MoodMeterHeader />
        <main className="p-4 md:p-6">
          <div className="max-w-2xl mx-auto space-y-6">
            <MoodSelector />
            <MoodNote />
            <MoodHistory />
          </div>
        </main>
      </MoodProvider>
    </div>
  );
}