package com.company.employeeservice.service;

import com.company.employeeservice.dao.EmployeeRepository;
import com.company.employeeservice.dao.NotesRepository;
import com.company.employeeservice.dto.Employee;
import com.company.employeeservice.dto.Notes;
import com.company.employeeservice.viewmodel.EmployeeViewModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
public class ServiceLayer {

    private EmployeeRepository employeeDao;
    private NotesRepository notesDao;


    public ServiceLayer() {
    }

    @Autowired
    public ServiceLayer(EmployeeRepository employeeDao, NotesRepository notesDao) {
        this.employeeDao = employeeDao;
        this.notesDao = notesDao;
    }

    @Transactional
    public EmployeeViewModel saveEmployee(EmployeeViewModel viewModel) {

        // Persist Employee
        Employee e = new Employee();
        e.setFirstName(viewModel.getFirstName());
        e.setLastName(viewModel.getLastName());
        e.setDepartment(viewModel.getDepartment());
        e = employeeDao.save(e);
        viewModel.setId(e.getId());

        // Add Employee ID to Notes and persist Notes
        List<Notes> notes = viewModel.getNotes();

        notes.stream()
                .forEach(n ->
                {
                    n.setEmployeeId(viewModel.getId());
                    notesDao.save(n);
                });

        notes = notesDao.findByEmployeeId(viewModel.getId());
        viewModel.setNotes(notes);

        return viewModel;
    }

    @Transactional
    public void updateEmployee(EmployeeViewModel viewModel) {

        // Update the employee information
        Employee employee = new Employee();
        employee.setId(viewModel.getId());
        employee.setFirstName(viewModel.getFirstName());
        employee.setLastName(viewModel.getLastName());
        employee.setDepartment(viewModel.getDepartment());

        employeeDao.save(employee);

        // We don't know if any notes have been removed so delete all associated notes
        // and then associate the notes in the viewModel with the employee
        List<Notes> notesList = notesDao.findByEmployeeId(viewModel.getId());
        notesList.stream()
                .forEach(n ->
                {
                    n.setEmployeeId(viewModel.getId());
                    n = notesDao.save(n);
                });
    }
}
