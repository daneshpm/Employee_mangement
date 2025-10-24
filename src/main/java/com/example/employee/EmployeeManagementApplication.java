package com.example.employee;

//import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.annotation.Bean;



@SpringBootApplication
public class EmployeeManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagementApplication.class, args);
	}
//	@Bean
//	 public CommandLineRunner demo(EmployeeRepository repo) {
//        return args -> {
//            // Add an employee
//            Employee e1 = new Employee("Alice", 50000.0, 9876543210L, "alice@example.com");
//            repo.save(e1);
//
//            // List all employees
//            System.out.println("All employees:");
//            repo.findAll().forEach(System.out::println);
//        };
//    }

}
