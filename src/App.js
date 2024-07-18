import React , {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './views/General/Login';
import Dashboard from './views/Students/Dashboard';
import AdminPanel from './views/Admin/AdminPanel';
import AdminUsers from './components-admin/AdminUsers';
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
        <Route path="/users" element={<AuthRoute requiredRole="Admin" element={<AdminUsers showNotification={showNotification}/>} />} />
        <Route path="/" element={<Login showNotification={showNotification}/>} />
        </Routes>
    </Router>
  );
};

export default App;
