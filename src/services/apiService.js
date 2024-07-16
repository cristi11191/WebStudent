import axios from 'axios';

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
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await refreshToken();
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Refresh token failed:', refreshError);
        localStorage.removeItem('token');
        window.location.replace('/login');
        return Promise.reject(refreshError);
      }
    } else if (error.response.status === 403) {
      console.error('Unauthorized access:', error);
      localStorage.removeItem('token');
      window.location.replace('/login');
    }
    return Promise.reject(error);
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
