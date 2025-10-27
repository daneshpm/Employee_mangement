import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import EmployeeForm from "./components/EmployeeFrom";
import EmployeeList from "./components/Employeelist";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import AdminPanel from "./components/AdminPanel";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthService from "./Services/AuthService";

function App() {
  const isAuthenticated = AuthService.isAuthenticated();

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/" replace /> : <Login />} 
        />
        <Route 
          path="/register" 
          element={isAuthenticated ? <Navigate to="/" replace /> : <Register />} 
        />
        
        {/* Protected routes */}
        <Route path="/*" element={
          <ProtectedRoute>
            <div className="d-flex">
              <Sidebar />
              <div className="flex-grow-1" style={{ marginLeft: "250px" }}>
                <Topbar />
                <div className="container-fluid mt-4">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/add" element={<EmployeeForm />} />
                    <Route path="/employees" element={<EmployeeList />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/admin" element={<AdminPanel />} />
                  </Routes>
                </div>
              </div>
            </div>
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
