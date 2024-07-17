import axios from 'axios';
import Notification from '../alerts/ErrorAlert';
const baseURL = 'http://127.0.0.1:8000/api/';

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to refresh token
const refreshToken = async () => {
  try {
    const response = await axiosInstance.post('refresh');
    localStorage.setItem('token', response.data.newToken);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.newToken}`;
    return response.data.newToken;
  } catch (error) {
    throw error;
  }
};

// Interceptor to check and refresh token before requests
// Network error handler
const handleNetworkError = (error) => {
  Notification({ message: 'Network Error: Please check your internet connection or try again later.', type: 'error' });
  return Promise.reject(error);
};

// 401 Unauthorized error handler
const handleUnauthorizedError = async (originalRequest) => {
  if (!originalRequest._retry) {
    originalRequest._retry = true;
    try {
      const newToken = await refreshToken();
      originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
      return axiosInstance(originalRequest);
    } catch (refreshError) {
      console.error('Refresh token failed:', refreshError);
      localStorage.removeItem('token');
      return Promise.reject(refreshError);
    }
  }
  return Promise.reject(originalRequest);
};

// 403 Forbidden error handler
const handleForbiddenError = (error) => {
  console.error('Unauthorized access:', error);
  localStorage.removeItem('token');
  window.location.replace('/login');
  return Promise.reject(error);
};

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (!error.response) {
      return handleNetworkError(error);
    }

    if (error.response.status === 401) {
      return handleUnauthorizedError(originalRequest);
    }

    if (error.response.status === 403) {
      return handleForbiddenError(error);
    }

    return Promise.reject(error); // Reject other errors
  }
);

// Add token to each request if exists
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post('login', { email, password });
    localStorage.setItem('token', response.data.token);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fetch current user data
export const fetchCurrentUser = async () => {
  try {
    const response = await axiosInstance.get('current-user');
    localStorage.setItem('role', response.data.user.role);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default axiosInstance;
