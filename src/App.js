import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import AdminPanel from './views/AdminPanel';

const App = () => {

  const getUserRole = () => {
    return localStorage.getItem('role');
  };

  const isAuthenticated = () => {
    return localStorage.getItem('token');
  };

  const ProtectedRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/login" />;
  };

  const AdminRoute = ({ element }) => {
    const role = getUserRole();
    return isAuthenticated() && role === 'admin' ? element : <Navigate to="/login" />;
  };



  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/adminpanel" element={<AdminRoute element={<AdminPanel />} />} />
        <Route path="/" element={<Login />} />
        </Routes>
    </Router>
  );
};

export default App;
