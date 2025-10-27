import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBell, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import AuthService from "../Services/AuthService";

const Topbar = () => {
  const navigate = useNavigate();
  const currentUser = AuthService.getCurrentUser();

  const handleLogout = () => {
    AuthService.logout();
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav
      className="navbar navbar-light bg-white shadow-sm px-4"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <h5 className="fw-bold text-primary">Employee Management Dashboard</h5>
      <div className="d-flex align-items-center">
        <span className="me-3 text-muted">Welcome, {currentUser?.username}</span>
        <FaBell className="me-3 text-secondary" size={20} />
        <FaUserCircle className="me-3 text-primary" size={28} />
        <button 
          className="btn btn-outline-danger btn-sm"
          onClick={handleLogout}
          title="Logout"
        >
          <FaSignOutAlt />
        </button>
      </div>
    </nav>
  );
};

export default Topbar;
