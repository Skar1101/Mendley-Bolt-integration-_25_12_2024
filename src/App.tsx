import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SciencePage from './pages/SciencePage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import DashboardPage from './pages/DashboardPage';
import DiscoverPage from './pages/DiscoverPage';
import MemoriesPage from './pages/MemoriesPage';
import MoodMeterPage from './pages/MoodMeterPage';
import ChatPage from './pages/ChatPage';
import ChatAnalysisPage from './pages/ChatAnalysis/ChatAnalysisPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/memories" element={<MemoriesPage />} />
        <Route path="/mood" element={<MoodMeterPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chat-analysis" element={<ChatAnalysisPage />} />
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-black text-white">
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/science" element={<SciencePage />} />
              </Routes>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}