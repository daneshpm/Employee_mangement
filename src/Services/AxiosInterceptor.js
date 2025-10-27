import axios from "axios";
import AuthService from "./AuthService";

// Request interceptor to add token to requests
axios.interceptors.request.use(
  (config) => {
    const user = AuthService.getCurrentUser();
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token expired or invalid
      AuthService.logout();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axios;