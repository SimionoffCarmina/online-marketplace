import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AccountPage.css';

function AccountPage() {
  const [isLoggedIn] = useState(false);

  return (
    <div className="account-page">
      {!isLoggedIn ? (
        <div className="not-logged-in">
          <h2>You are not logged in</h2>
          <p>Please choose an option:</p>
          <div className="auth-buttons">
            <Link to="/signin" className="auth-button">Sign In</Link>
            <Link to="/signup" className="auth-button">Create Account</Link>
          </div>
        </div>
      ) : (
        <div>
          <h2>Welcome to your account!</h2>
          <p>Account details and orders will show here.</p>
        </div>
      )}
    </div>
  );
}

export default AccountPage;
