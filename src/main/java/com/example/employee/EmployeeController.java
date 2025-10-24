package com.example.employee;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;



@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
	private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

    // CREATE
    @PostMapping
    public Employee addEmployee(@Valid @RequestBody Employee e) {
        return service.addemployee(e);
    }
    
    @GetMapping("/search")
    public List<Employee> searchByName(@RequestParam String name) {
        return service.searchByName(name);
    }

    // READ all
    @GetMapping
    public List<Employee> getAllEmployees() {
        return service.getAllEmployees();
    }

    // READ one
    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable Integer id) {
        return service.getEmployeeById(id);
    }

    // UPDATE
    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Integer id,@Valid @RequestBody Employee e) {
        return service.updateEmployee(id, e);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Integer id) {
        service.deleteEmployee(id);
        return "Employee deleted successfully.";
    }
    @GetMapping("/stats")
    public Map<String,Object> getSalarystats(){
    	List<Employee> all= service.getAllEmployees();
    	double avg=all.stream().mapToDouble(e->e.getSalary()==null?0:e.getSalary()).average().orElse(0);
    	double max=all.stream().mapToDouble(e->e.getSalary()==null?0:e.getSalary()).max().orElse(0);
    	double min=all.stream().mapToDouble(e->e.getSalary()==null?0:e.getSalary()).min().orElse(0);
    	return Map.of("average",avg,"maximum",max,"minimum",min);
    }
    
    
}
