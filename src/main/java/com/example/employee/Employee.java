package com.example.employee;




import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*; 

@Entity
public class Employee {
	
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;

@NotBlank(message = "Name cannot be empty")
private String name;
@NotNull(message="salary cannot be empty")
@Positive(message="salary cannot be negative")
private Double salary;
@NotNull(message="mobile no required")
private Long mobile;
@Email(message="Invalid email address")
private String email;

public Employee() {}

public Employee(String name, Double salary, Long mobile, String email) {
	this.name = name;
	this.salary = salary;
	this.mobile = mobile;
	this.email = email;
}

public Integer getId() {
	return id;
}

public void setId(Integer id) {
	this.id = id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public Double getSalary() {
	return salary;
}

public void setSalary(Double salary) {
	this.salary = salary;
}

public Long getMobile() {
	return mobile;
}

public void setMobile(Long mobile) {
	this.mobile = mobile;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

@Override
public String toString() {
	return "Employee [id=" + id + ", name=" + name + ", salary=" + salary + ", mobile=" + mobile + ", email=" + email
			+ "]";
}


}
