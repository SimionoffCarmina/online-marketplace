import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
import CreateAccountPage from './pages/CreateAccountPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/signup" element={<CreateAccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;