import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../utils/auth';
import DashboardHeader from './components/DashboardHeader';
import DateContainer from '../../components/DateContainer';
import DailyCards from '../../components/DailyCards';
import HeroCards from '../../components/HeroCards';
import SereneSanctuary from '../../components/SereneSanctuary';

export default function DashboardPage() {
  const session = auth.getSession();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-black">
      <DashboardHeader />
      <div className="p-6">
        <div className="max-w-5xl mx-auto">
          <DateContainer />
          <DailyCards />
          <HeroCards />
          <SereneSanctuary />
        </div>
      </div>
    </div>
  );
}