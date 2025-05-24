import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AccountPage.css';

function AccountPage({ isLoggedIn, setIsLoggedIn }) {
  const [userEmail, setUserEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setUserEmail(localStorage.getItem('userEmail') || '');
    setFirstName(localStorage.getItem('firstName') || '');
    setLastName(localStorage.getItem('lastName') || '');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    setIsLoggedIn(false);
    navigate('/');
  };

  if (!isLoggedIn) {
    return (
      <div className="account-page">
        <div className="not-logged-in">
          <h2>You are not logged in</h2>
          <p>Please choose an option:</p>
          <div className="auth-buttons">
            <Link to="/signin" className="auth-button">Sign In</Link>
            <Link to="/signup" className="auth-button">Create Account</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="account-page">
      <div className="logged-in" style={{ textAlign: 'center' }}>
        <h2>Account Details</h2>
        <p><strong>Email:</strong> {userEmail}</p>
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <button onClick={handleLogout} className="logout-button">Log Out</button>
      </div>
    </div>
  );
}

export default AccountPage;
