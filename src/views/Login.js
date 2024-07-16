import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, fetchCurrentUser } from '../services/apiService'; // Adjust the path if necessary
import '../styles/styles.css';
import { Alert } from '@rewind-ui/core';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password); // Use the imported login function directly
      const user = await fetchCurrentUser();
      // Redirect to the appropriate dashboard based on role
      if (user.user.role === 'Admin') {
        navigate('/adminpanel');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      <Alert variant="danger" title="Alert!">{error}</Alert>
    }
  };
  
  return (
    <div className="LoginBody">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className="logbtn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
