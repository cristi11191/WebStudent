// src/alerts/ErrorAlert.js
import React , {useEffect} from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Snackbar } from '@mui/material';

const Notification = ({ message, type, open, onClose }) => {

    useEffect(() => {
        if (open) {
          const timer = setTimeout(onClose, 4000);
          return () => clearTimeout(timer);
        }
      }, [open, onClose]);
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={type} sx={{ width: '100%' }} >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
