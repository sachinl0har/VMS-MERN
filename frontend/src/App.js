import React from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import AppMenu from './components/appMenu';
import AppHeader from './components/appHeader';
import AppFooter from './components/appFooter';
import Feed from './components/pages/Feed';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <AppHeader />
        <AppMenu />
        <div className="content-wrapper">
    
          <Routes>
          <Route element={ <Dashboard/>} />
          <Route path="/" exact element={ <Dashboard/>} />
          <Route path="/feed" element={ <Feed/>} />
          </Routes>
        </div>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;