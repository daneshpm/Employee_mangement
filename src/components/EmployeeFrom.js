import React, { useEffect, useState } from "react";
import EmployeeService from "../Services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeForm() {
  const [employee, setEmployee] = useState({ name: "", salary: "", mobile: "", email: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      EmployeeService.getById(id).then(res => setEmployee(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      EmployeeService.update(id, employee).then(() => navigate("/"));
    } else {
      EmployeeService.create(employee).then(() => navigate("/"));
    }
  };

  return (
    <div>
      <h2>{id ? "Edit Employee" : "Add Employee"}</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={employee.name} onChange={handleChange} className="form-control mb-2" placeholder="Name" required />
        <input name="salary" value={employee.salary} onChange={handleChange} className="form-control mb-2" placeholder="Salary" type="number" required />
        <input name="mobile" value={employee.mobile} onChange={handleChange} className="form-control mb-2" placeholder="Mobile" type="number" required />
        <input name="email" value={employee.email} onChange={handleChange} className="form-control mb-2" placeholder="Email" type="email" required />
        <button className="btn btn-success">{id ? "Update" : "Save"}</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
