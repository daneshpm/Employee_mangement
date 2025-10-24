import React, { useEffect, useState } from "react";
import EmployeeService from "../Services/EmployeeService";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#4f46e5", "#22c55e", "#f97316", "#06b6d4", "#e11d48"];

const Analytics = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ average: 0, min: 0, max: 0 });

  useEffect(() => {
    EmployeeService.getAll()
      .then((res) => {
        const data = res.data;
        setEmployees(data);
        calculateStats(data);
      })
      .catch((err) => console.error("Error fetching employees:", err))
      .finally(() => setLoading(false));
  }, []);

  const calculateStats = (data) => {
    if (!data || data.length === 0) return;
    const salaries = data.map((emp) => emp.salary);
    const avg = salaries.reduce((a, b) => a + b, 0) / salaries.length;
    const min = Math.min(...salaries);
    const max = Math.max(...salaries);
    setStats({ average: avg, min, max });
  };

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );

  return (
    <div className="container py-4">
      <h2 className="fw-bold text-center mb-4 text-primary">
        Employee Analytics Dashboard
      </h2>

      {/* Stats Cards */}
      <div className="row text-center mb-4">
        <div className="col-md-4 mb-3">
          <div className="p-3 shadow rounded-4 bg-light bg-opacity-75">
            <h5>Average Salary</h5>
            <h3 className="fw-bold text-primary">
              ₹{stats.average.toFixed(2)}
            </h3>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="p-3 shadow rounded-4 bg-light bg-opacity-75">
            <h5>Maximum Salary</h5>
            <h3 className="fw-bold text-success">₹{stats.max}</h3>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="p-3 shadow rounded-4 bg-light bg-opacity-75">
            <h5>Minimum Salary</h5>
            <h3 className="fw-bold text-danger">₹{stats.min}</h3>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="card p-4 shadow-sm mb-4">
        <h5 className="text-center text-secondary mb-3">Salary Distribution</h5>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={employees}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="salary" fill="#6366f1" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="card p-4 shadow-sm">
        <h5 className="text-center text-secondary mb-3">
          Salary Share (by Employee)
        </h5>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={employees}
              dataKey="salary"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {employees.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                  style={{ transition: "all 0.3s ease-in-out" }}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
