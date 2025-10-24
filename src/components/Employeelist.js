import React, { useEffect, useState } from "react";
import EmployeeService from "../Services/EmployeeService";
import { Link } from "react-router-dom";
import StatsCard from "./StatsCard";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    EmployeeService.getAll().then(res => setEmployees(res.data));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      EmployeeService.delete(id).then(() => loadEmployees());
    }
  };

  const handleSearch = () => {
    if (!search.trim()) {
      loadEmployees();
    } else {
      EmployeeService.search(search).then(res => setEmployees(res.data));
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
      </div>

      <StatsCard />

      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th><th>Name</th><th>Salary</th><th>Mobile</th><th>Email</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.salary}</td>
              <td>{emp.mobile}</td>
              <td>{emp.email}</td>
              <td>
                <Link to={`/edit/${emp.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <button onClick={() => handleDelete(emp.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
