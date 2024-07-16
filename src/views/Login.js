// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, fetchCurrentUser } from '../services/apiService'; // Adjust the path if necessary
import '../styles/styles.css';
import Button from '@mui/material/Button';
import Notification from '../alerts/ErrorAlert';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '', open: false });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password); // Use the imported login function directly
      const user = await fetchCurrentUser();
      const notificationMessage = { message: 'Login successful', type: 'success' };
      // Redirect to the appropriate dashboard based on role
      if (user.user.role === 'Admin') {
        navigate('/adminpanel', { state: notificationMessage });
      } else {
        navigate('/dashboard', { state: notificationMessage });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'An unknown error occurred.';
      setNotification({ message: `Login Failed: ${errorMessage}`, type: 'error', open: true });
    }
  };

  const handleClose = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <div className="LoginBody">
      <div className="login-container">
        <Notification 
          message={notification.message} 
          type={notification.type} 
          open={notification.open} 
          onClose={handleClose} 
        />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button className="logbtn" type="submit">Click</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
