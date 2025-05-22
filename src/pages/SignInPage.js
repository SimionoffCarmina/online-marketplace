import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignInPage.css';

function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    setError('');
    alert(`Signed in as ${email}`);
    navigate('/'); 
  };

  return (
    <div className="sign-in-page">
      <h2>Sign In</h2>
      <form className="sign-in-form" onSubmit={handleSubmit}>
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
          />
        </label>

        {error && <p className="error">{error}</p>}

        <button type="submit">Sign In</button>
      </form>

      <p>
        Don't have an account? <Link to="/create-account">Create Account</Link>
      </p>
    </div>
  );
}

export default SignInPage;
