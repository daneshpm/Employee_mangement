import React from "react";
import StatsCard from "./StatsCard";
import EmployeeList from "./Employeelist";

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center text-dark mb-4 fw-bold">Employee Manager</h1>

      {/* Statistics Section */}
      <StatsCard />

      {/* Employee Table */}
      <div className="mt-5">
        <EmployeeList />
      </div>
    </div>
  );
};

export default Dashboard;
