import React, { useEffect, useState } from "react";
import EmployeeService from "../Services/EmployeeService";

const StatsCard = () => {
  const [stats, setStats] = useState({ average: 0, max: 0, min: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    EmployeeService.getStats()
      .then((res) => {
        console.log("Stats API response:", res.data);
        // Handle both {average, max, min} and nested {data: {...}} formats
        const data = res.data.average !== undefined ? res.data : res.data.data;
        setStats({
          average: Number(data.average) || 0,
          max: Number(data.maximum) || 0,
          min: Number(data.minimum) || 0,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching stats:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center my-4 text-muted">
        <div className="spinner-border text-primary me-2" role="status"></div>
        Loading statistics...
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center my-4">
        ⚠️ Failed to load statistics. Please try again later.
      </div>
    );
  }

  // ✅ Safe number formatter
  const formatNumber = (num) => {
    if (num === undefined || num === null || isNaN(num)) return "0.00";
    return num.toLocaleString("en-IN", { maximumFractionDigits: 2 });
  };

  return (
    <div className="container my-4">
      <h3 className="fw-bold mb-4 text-center text-primary">
        Employee Statistics
      </h3>

      <div className="row g-3">
        <div className="col-md-4">
          <div className="card text-center shadow border-0 bg-info text-white">
            <div className="card-body">
              <h5 className="card-title">Average Salary</h5>
              <h3 className="fw-bold">₹ {formatNumber(stats.average)}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow border-0 bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Max Salary</h5>
              <h3 className="fw-bold">₹ {formatNumber(stats.max)}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow border-0 bg-danger text-white">
            <div className="card-body">
              <h5 className="card-title">Min Salary</h5>
              <h3 className="fw-bold">₹ {formatNumber(stats.min)}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;