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
}
