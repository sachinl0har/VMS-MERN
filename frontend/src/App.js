import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AppMenu from './components/appMenu';
import AppHeader from './components/appHeader';
import AppFooter from './components/appFooter';
import Feed from './components/pages/Feed';
import Login from './components/pages/Login';
import Dashboard from './components/Dashboard';
import Appointments from './components/pages/Appointments';
import AppointmentDetails from './components/pages/AppointmentDetails';

import FeedAppointmentForm from './components/pages/FeedAppointmentForm';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/appointmentDetails/:id" element={<AuthenticatedPage><AppointmentDetails /></AuthenticatedPage>} />
        <Route path="/appointments" element={<AuthenticatedPage><Appointments /></AuthenticatedPage>} />
        <Route path="/dashboard" element={<AuthenticatedPage><Dashboard /></AuthenticatedPage>} />
        <Route path="/feed" element={<AuthenticatedPage><FeedAppointmentForm /></AuthenticatedPage>} />
      </Routes>
    </Router>
  );
}

function AuthenticatedPage({ children }) {
  const emprole = localStorage.getItem('role');
  return (
    <>
      <AppHeader />
      <AppMenu role={emprole} />
      {children}
      <AppFooter />
    </>
  );
}

function LoginPage() {
  return <Login />;
}

export default App;
