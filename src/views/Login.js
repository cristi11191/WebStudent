// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, fetchCurrentUser } from '../services/apiService';
import '../styles/styles.css';
import '../styles/login.css';
import Button from '@mui/material/Button';
import useDarkMode from '../hooks/useDarkMode';

const Login = ({ showNotification }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isDarkMode, toggleDarkMode] = useDarkMode();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password); 
      const user = await fetchCurrentUser();

      showNotification('Login successful', 'success');

      if (user.user.role === 'Admin') {
        navigate('/adminpanel');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {

      const errorMessage = error.response?.data?.error || 'An unknown error occurred.';
      showNotification(`Login Failed: ${errorMessage}`, 'error');
    }
  };



  return (
    <div className="LoginBody">
      <div className="login-container">
        <div className="login-mode mode">
          <div className="mode-toggle" onClick={toggleDarkMode}>
            <span className="loginswitch"></span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button className="logbtn" type="submit"><span className="logintext">Click</span></Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
