import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <Link className="navbar-brand" to="/">Employee Manager</Link>
    <div className="navbar-nav">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/add">Add Employee</Link>
    </div>
  </nav>
);

export default Navbar;
