import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
import CreateAccountPage from './pages/CreateAccountPage';
import SignInPage from './pages/SignInPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/account"
          element={<AccountPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<CreateAccountPage onLogin={() => setIsLoggedIn(true)} />}
        />
        <Route
          path="/signin"
          element={<SignInPage onLogin={() => setIsLoggedIn(true)} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
