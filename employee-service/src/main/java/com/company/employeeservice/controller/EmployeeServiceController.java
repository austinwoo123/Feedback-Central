package com.company.employeeservice.controller;

import com.company.employeeservice.dao.EmployeeRepository;
import com.company.employeeservice.dto.Employee;
import com.company.employeeservice.service.ServiceLayer;
import com.company.employeeservice.viewmodel.EmployeeViewModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RefreshScope
@CrossOrigin
public class EmployeeServiceController {

    @Autowired
    private EmployeeRepository employeeRepo;

    @Autowired
    private ServiceLayer serviceLayer;

    @GetMapping("/employee")
    @ResponseStatus(value = HttpStatus.OK)
        public List<Employee> getAllEmployees(){
        return employeeRepo.findAll();

    }

    @GetMapping(value = "/employee/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public Employee getEmployeeById(@PathVariable int id) {
        Optional<Employee> employee = employeeRepo.findById(id);

        if (!employee.isPresent()) {
            return null;
        }

        return employee.get();

//        Employee foundEmployee = null;
//        List<Employee> employeeList = employeeRepo.findAll();
//
//        for(Employee employee: employeeList);
//        if()
    }

    @PostMapping("/employee")
    @ResponseStatus(value=HttpStatus.CREATED)
    public EmployeeViewModel addEmployee(@RequestBody EmployeeViewModel viewModel) {
//        employeeRepo.save(employee);
        serviceLayer.saveEmployee(viewModel);
        return viewModel;
    }

    @DeleteMapping(value = "/employee/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteEmployee(@PathVariable int id) {
        employeeRepo.deleteById(id);
    }

    @PutMapping(value = "/employee/{id}")
    @ResponseStatus(value= HttpStatus.NO_CONTENT)
    public void updateEmployee(@RequestBody EmployeeViewModel viewModel, @PathVariable int id) {
        if(viewModel.getId() == null) {
            viewModel.setId(id);
        }

        if(viewModel.getId() != id) {
            throw new IllegalArgumentException("Employee ID must match parameter given");
        }
        serviceLayer.updateEmployee(viewModel);
    }



}
