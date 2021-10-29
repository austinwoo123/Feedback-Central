package com.company.employeeservice.viewmodel;

import com.company.employeeservice.dto.Notes;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

//First, the browser sends a request to the Controller. Then, the Controller interacts with the Model to send and receive data. ...
// Finally, the View will send its final presentation to the Controller and the Controller will send that final data to the user output.
public class EmployeeViewModel {

    private Integer id;
    private String firstName;
    private String lastName;
    private String department;
    private List<Notes> notes = new ArrayList<>();

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

    public List<Notes> getNotes() {
        return notes;
    }

    public void setNotes(List<Notes> notes) {
        this.notes = notes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EmployeeViewModel that = (EmployeeViewModel) o;
        return Objects.equals(id, that.id) && Objects.equals(firstName, that.firstName) && Objects.equals(lastName, that.lastName) && Objects.equals(department, that.department) && Objects.equals(notes, that.notes);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, department, notes);
    }
}
