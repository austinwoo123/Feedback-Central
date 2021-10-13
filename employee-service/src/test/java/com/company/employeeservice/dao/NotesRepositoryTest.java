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
import java.util.Set;

import static org.junit.Assert.*;
@RunWith(SpringRunner.class)
@SpringBootTest
public class NotesRepositoryTest {


    @Autowired
    NotesRepository notesRepo;

    private Notes notes1;

    Set noteSet= new HashSet<>();

    @Before
    public void setUp() throws Exception {

        notesRepo.deleteAll();
        notes1 = new Notes();
        notes1.setNote("This is a test note");
        notes1.setPositives("This is a positive test");
        notes1.setNeedImprovement("This is a needs improvement test");
        noteSet.add(notes1);

    }
    @Test
    public void shouldUpdateNotesFromDatabase(){

        notesRepo.save(notes1);
        notes1.setPositives("Test1");
        notes1.setNeedImprovement("Test2");
        notes1.setEmployeeId(2);
        notes1.setNote("Test3");
        notes1 = notesRepo.save(notes1);


        Notes fromRepo = notesRepo.findById(notes1.getId()).get();
        assertEquals(notes1, fromRepo);

    }

}