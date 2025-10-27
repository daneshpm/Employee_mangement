import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaPlus, FaChartPie, FaUsers, FaUserShield } from "react-icons/fa";
import AuthService from "../Services/AuthService";

const Sidebar = () => {
  const location = useLocation();
  const currentUser = AuthService.getCurrentUser();
  const isAdmin = currentUser?.roles?.includes("ROLE_ADMIN");

  const navItems = [
    { path: "/", label: "Dashboard", icon: <FaHome /> },
    { path: "/add", label: "Add Employee", icon: <FaPlus /> },
    { path: "/employees", label: "Employees", icon: <FaUsers /> },
    { path: "/analytics", label: "Analytics", icon: <FaChartPie /> },
  ];

  if (isAdmin) {
    navItems.push({ path: "/admin", label: "Admin Panel", icon: <FaUserShield /> });
  }

  return (
    <div
      className="d-flex flex-column p-3 text-white"
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0056b3, #003d80)",
        position: "fixed",
      }}
    >
      <h4 className="text-center mb-4 fw-bold">💼 EMPLOYEE HUB</h4>

      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-link text-white mb-2 d-flex align-items-center ${
            location.pathname === item.path ? "active-nav" : ""
          }`}
        >
          <span className="me-2">{item.icon}</span> {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
