import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Topbar = () => {
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
      <div>
        <FaBell className="me-3 text-secondary" size={20} />
        <FaUserCircle className="text-primary" size={28} />
      </div>
    </nav>
  );
};

export default Topbar;
