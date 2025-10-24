import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import EmployeeForm from "./components/EmployeeFrom";
import EmployeeList from "./components/Employeelist";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";

function App() {
  return (
    <Router>
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
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
