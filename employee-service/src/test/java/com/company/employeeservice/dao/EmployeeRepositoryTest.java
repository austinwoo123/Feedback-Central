package com.company.employeeservice.dao;

import com.company.employeeservice.dto.Employee;
import com.company.employeeservice.dto.Notes;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static org.junit.Assert.*;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EmployeeRepositoryTest {

    @Autowired
    EmployeeRepository employeeRepo;
    @Autowired
    NotesRepository notesRepo;

    private Employee employee1;
    private Notes notes1;

    Set noteSet= new HashSet<>();
//    private Employee employee2;


    @Before
    public void setUp() {

        employeeRepo.deleteAll();
        notesRepo.deleteAll();

        employee1= new Employee();

        employee1.setFirstName("John");
        employee1.setLastName("Smith");
        employee1.setDepartment("Sales");

        notes1 = new Notes();
        notes1.setNote("This is a test note");
        notes1.setPositives("This is a positive test");
        notes1.setNeedImprovement("This is a needs improvement test");
        noteSet.add(notes1);


//        employee2= new Employee();
//        employee2.setFirstName("Alex");
//        employee2.setLastName("Ford");
//        employee2.setDepartment("Engineer");

    }

    @Test
    public void shouldAddNoteAndEmployeeFromDatabase(){
        employee1 = employeeRepo.save(employee1);
        notes1.setEmployeeId(employee1.getId());
        notesRepo.save(notes1);
        //Assert...
        List<Employee> employeeList = employeeRepo.findAll();
        assertEquals(1, employeeList.size());
        //Assert...
        noteSet =  employeeList.get(0).getNotes();
        assertEquals(1, noteSet.size());
//        Employee fromRepo = employeeRepo.findById(employee1.getId()).get();
//        assertEquals(employee1, fromRepo);
    }

    @Test
    public void shouldUpdateEmployeeFromDatabase(){

        employeeRepo.save(employee1);
        employee1.setFirstName("Kevin");
        employee1.setNotes(noteSet);
        employee1 = employeeRepo.save(employee1);


        Employee fromRepo = employeeRepo.findById(employee1.getId()).get();
        assertEquals(employee1, fromRepo);

    }

    @Test
    public void shouldDeleteNoteAndEmployeeFromDatabase(){
        employee1 = employeeRepo.save(employee1);

        employeeRepo.deleteById(employee1.getId());

        Optional<Employee> fromRepo = employeeRepo.findById(employee1.getId());

        assertFalse(fromRepo.isPresent());
    }



}