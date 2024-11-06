// client/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('adminToken'));

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        {/* Public Landing Page */}
        <Route path="/" element={
          <div>
            <HeroSection />
            <ContactSection />
            <FooterSection /> {/* FooterSection now includes AboutUsSection, ServicesSection, etc. */}
          </div>
        } />

        {/* Admin Login */}
        <Route path="/admin" element={
          isLoggedIn ? <Navigate to="/admin/dashboard" /> : <AdminLogin onLogin={handleLogin} />
        } />

        {/* Protected Admin Dashboard */}
        <Route path="/admin/dashboard" element={
          isLoggedIn ? <AdminDashboard onLogout={handleLogout} /> : <Navigate to="/admin" />
        } />
      </Routes>
    </Router>
  );
};

export default App;
