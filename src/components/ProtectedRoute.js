import React from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../Services/AuthService";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = AuthService.isAuthenticated();
  
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;