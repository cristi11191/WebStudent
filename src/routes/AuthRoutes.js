// src/components/AuthRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { fetchCurrentUser } from '../services/apiService'; // Adjust the path if necessary

const AuthRoute = ({ element, requiredRole }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const response = await fetchCurrentUser();
        const userRole = response.user.role;
        if (requiredRole) {
          setIsAuthorized(userRole === requiredRole);
        } else {
          setIsAuthorized(true);
        }
      } catch (error) {
        setIsAuthorized(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthorization();
  }, [requiredRole]);

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading indicator while checking authorization
  }

  return isAuthorized ? element : <Navigate to="/login" />;
};

export default AuthRoute;
