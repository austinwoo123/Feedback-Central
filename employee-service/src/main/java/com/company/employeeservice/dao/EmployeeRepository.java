package com.company.employeeservice.dao;

import com.company.employeeservice.dto.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//@Repository is a Spring annotation that indicates that the decorated class is a repository.
// A repository is a mechanism for encapsulating storage, retrieval, and search behavior which emulates a collection of objects.


//DAO stands for Data Access Object. ... Initialization of data access object, resource management and transaction management and exception handling
// are the main parts of persistence framework.
// Spring data access framework is provided to integrate with different persistence frameworks like JDBC, Hibernate, JPA, iBatis etc
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
