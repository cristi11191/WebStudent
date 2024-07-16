import React , {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import AdminPanel from './views/AdminPanel';
import Notification from './alerts/ErrorAlert';

const App = () => {
  const [notification, setNotification] = useState({ message: '', type: '', open: false });


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
    return isAuthenticated() && role === 'Admin' ? element : <Navigate to="/login" />;
  };

  const showNotification = (message, type) => {
    setNotification({ message, type, open: true });
  };

  const handleClose = () => {
    setNotification({ ...notification, open: false });
  };


  return (
    <Router>
      <Notification 
        message={notification.message} 
        type={notification.type} 
        open={notification.open} 
        onClose={handleClose} 
      />
      <Routes>
        <Route path="/login" element={<Login showNotification={showNotification}/>} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard showNotification={showNotification}/>} />} />
        <Route path="/adminpanel" element={<AdminRoute element={<AdminPanel showNotification={showNotification}/>} />} />
        <Route path="/" element={<Login showNotification={showNotification}/>} />
        </Routes>
    </Router>
  );
};

export default App;
