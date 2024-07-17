import React , {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import AdminPanel from './views/AdminPanel';
import Notification from './alerts/ErrorAlert';
import AuthRoute from './routes/AuthRoutes'; 

const App = () => {
  const [notification, setNotification] = useState({ message: '', type: '', open: false });


  

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
        <Route path="/dashboard" element={<AuthRoute element={<Dashboard showNotification={showNotification}/>} />} />
        <Route path="/adminpanel" element={<AuthRoute requiredRole="Admin" element={<AdminPanel showNotification={showNotification}/>} />} />
        <Route path="/" element={<Login showNotification={showNotification}/>} />
        </Routes>
    </Router>
  );
};

export default App;
