import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AppMenu from './components/appMenu';
import AppHeader from './components/appHeader';
import AppFooter from './components/appFooter';
import Feed from './components/pages/Feed';
import Login from './components/pages/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
      <Route element={ <Login/>} />
          <Route path="/" exact element={ <Login/>} />
      </Routes>
        <AppHeader />
        <AppMenu />
        <Routes>
          <Route path="/dashboard" element={ <Dashboard/>} />
          <Route path="/feed" element={ <Feed/>} />
          </Routes>
        <AppFooter />
      
    </Router>
  );
}

export default App;