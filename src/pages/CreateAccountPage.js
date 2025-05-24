import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CreateAccountPage.css';

function CreateAccountPage({ onLogin }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    setError('');

    localStorage.setItem('firstName', formData.firstName);
    localStorage.setItem('lastName', formData.lastName);
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('isLoggedIn', 'true');

    alert(`Account created for ${formData.firstName} ${formData.lastName}!`);

    onLogin();
    navigate('/');
  };

  return (
    <div className="create-account-page">
      <h2>Create Account</h2>
      <form className="create-account-form" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            minLength={2}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            minLength={2}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />
        </label>

        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            minLength={6}
          />
        </label>

        {error && <p className="error">{error}</p>}

        <button type="submit">Create Account</button>
      </form>

      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
}

export default CreateAccountPage;
