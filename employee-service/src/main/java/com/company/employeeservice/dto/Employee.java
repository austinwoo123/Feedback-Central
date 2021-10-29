package com.company.employeeservice.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

//The @Entity annotation specifies that the class is an entity and is mapped to a database table.
// The @Table annotation specifies the name of the database table to be used for mapping
@Entity
//@JsonIgnoreProperties is used at class level to mark a property or list of properties to be ignored.
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name="employee")
//A Java class is not an object. However, every Java class has an instance of the Class class describing it. Those instances are objects.
public class Employee {
//    @Id is giving each note an ID
    @Id
//     auto-generate an id for each note
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String firstName;
    private String lastName;
    private String department;
//The inverse or the referencing side simply maps to the owning side. We can easily use the mappedBy attribute of
//@OneToMany annotation to do so. ... Here, the value of mappedBy is the name of the association-mapping attribute on the owning side.
    @OneToMany(mappedBy = "employeeId", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<Notes> notes;

    public Employee(Integer id, String firstName, String lastName, String department, Set<Notes> notes) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
        this.notes = notes;
    }
//default constructor
    public Employee(){

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public Set<Notes> getNotes() {
        return notes;
    }

    public void setNotes(Set<Notes> notes) {
        this.notes = notes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return Objects.equals(id, employee.id) && Objects.equals(firstName, employee.firstName) && Objects.equals(lastName, employee.lastName) && Objects.equals(department, employee.department);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, department);
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", department='" + department + '\'' +
                ", notes=" + notes +
                '}';
    }
}
