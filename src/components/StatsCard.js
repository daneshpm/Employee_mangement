import React, { useEffect, useState } from "react";
import EmployeeService from "../Services/EmployeeService";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaChartLine, FaMoneyBillWave, FaArrowUp, FaArrowDown } from "react-icons/fa";

const StatsCard = () => {
  const [stats, setStats] = useState({ average: 0, max: 0, min: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    EmployeeService.getStats()
      .then((res) => {
        const data = res.data;
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

  if (loading)
    return (
      <div className="text-center my-4 text-muted">
        <div className="spinner-border text-primary me-2" role="status"></div>
        Loading statistics...
      </div>
    );

  if (error)
    return (
      <div className="alert alert-danger text-center my-4">
        ⚠️ Failed to load statistics. Please try again later.
      </div>
    );

  // Reusable stat card component
  const StatCard = ({ color, title, icon, value, delay }) => (
    <motion.div
      className="col-md-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <div
        className="card text-center shadow-lg border-0 text-white p-4"
        style={{
          background: color,
          borderRadius: "18px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
        }}
      >
        <div className="mb-3">{icon}</div>
        <h6 className="text-uppercase fw-bold">{title}</h6>
        <h2 className="fw-bold mt-2">
          ₹
          <CountUp
            start={0}
            end={value}
            duration={1.6}
            separator=","
            decimals={2}
          />
        </h2>
      </div>
    </motion.div>
  );

  return (
    <div className="container my-5">
      <motion.h3
        className="fw-bold mb-4 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Employee Salary Statistics
      </motion.h3>

      <div className="row g-4">
        <StatCard
          color="linear-gradient(135deg, #17a2b8, #138496)"
          title="Average Salary"
          icon={<FaChartLine size={35} />}
          value={stats.average}
          delay={0.1}
        />
        <StatCard
          color="linear-gradient(135deg, #28a745, #218838)"
          title="Max Salary"
          icon={<FaArrowUp size={35} />}
          value={stats.max}
          delay={0.3}
        />
        <StatCard
          color="linear-gradient(135deg, #dc3545, #bd2130)"
          title="Min Salary"
          icon={<FaArrowDown size={35} />}
          value={stats.min}
          delay={0.5}
        />
      </div>
    </div>
  );
};

export default StatsCard;