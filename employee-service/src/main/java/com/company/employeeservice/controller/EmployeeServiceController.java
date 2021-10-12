package com.company.employeeservice.controller;

import com.company.employeeservice.dao.EmployeeRepository;
import com.company.employeeservice.dto.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RefreshScope
public class EmployeeServiceController {

    @Autowired
    private EmployeeRepository employeeRepo;

    @GetMapping("/employee")
        public List<Employee> getAllEmployees(){
        return employeeRepo.findAll();

    }

    @PostMapping("/employee")
    public Employee addEmployee(@RequestBody Employee employee) {
        employeeRepo.save(employee);
        return employee;
    }

    @DeleteMapping(value = "/employee/{id}")
    public void deleteEmployee(@PathVariable int id) {
        employeeRepo.deleteById(id);
    }

    @PutMapping(value = "/employee/{id}")
    public void updateEmployee(@RequestBody Employee employee, @PathVariable int id) {
        if(employee.getId() == null) {
            employee.setId(id);
        }

        if(employee.getId() != id) {
            throw new IllegalArgumentException("Employee ID must match parameter given");
        }
        employeeRepo.save(employee);
    }



}
