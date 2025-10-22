package com.example.employee;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
private final EmployeeRepository repo;

public EmployeeService(EmployeeRepository repo) {
	this.repo = repo;
}
//create
public Employee addemployee(Employee e) {
	return repo.save(e);
}
//find
public List<Employee> getAllEmployees() {
return repo.findAll();
}

public List<Employee> searchByName(String name) {
    return repo.findByNameContainingIgnoreCase(name);
} 

// Read one
public Employee getEmployeeById(Integer id) {
Optional<Employee> emp = repo.findById(id);
return emp.orElse(null);
}

// Update
public Employee updateEmployee(Integer id, Employee newData) {
return repo.findById(id)
        .map(e -> {
            e.setName(newData.getName());
            e.setSalary(newData.getSalary());
            e.setMobile(newData.getMobile());
            e.setEmail(newData.getEmail());
            return repo.save(e);
        })
        .orElse(null);
}

// Delete
public void deleteEmployee(Integer id) {
repo.deleteById(id);
}

}
