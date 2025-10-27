import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthService from "../Services/AuthService";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // This would be a real endpoint in your backend
      const response = await axios.get("http://localhost:8080/api/test/admin");
      setUsers([]);
      setLoading(false);
    } catch (error) {
      setError("Access denied. Admin privileges required.");
      setLoading(false);
    }
  };

  const isAdmin = currentUser?.roles?.includes("ROLE_ADMIN");

  if (!isAdmin) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning">
          <h4>Access Denied</h4>
          <p>You need administrator privileges to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4>Admin Panel</h4>
            </div>
            <div className="card-body">
              {loading ? (
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : error ? (
                <div className="alert alert-danger">{error}</div>
              ) : (
                <div>
                  <h5>Admin Features</h5>
                  <ul className="list-group">
                    <li className="list-group-item">User Management</li>
                    <li className="list-group-item">System Settings</li>
                    <li className="list-group-item">Security Configuration</li>
                    <li className="list-group-item">Audit Logs</li>
                  </ul>
                  <div className="mt-3">
                    <p className="text-success">✓ Admin access verified</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;