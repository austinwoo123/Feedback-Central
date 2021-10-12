package com.company.employeeservice.controller;

import com.company.employeeservice.dao.NotesRepository;
import com.company.employeeservice.dto.Notes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RefreshScope
@CrossOrigin
public class NotesController {

    @Autowired
    private NotesRepository notesRepo;

    @PostMapping("/notes")
    public Notes addNotes(@RequestBody Notes notes) {
        notesRepo.save(notes);
        return notes;
    }

    @DeleteMapping(value = "/notes/{id}")
    public void deleteNotes(@PathVariable int id) {
        notesRepo.deleteById(id);
    }

    @PutMapping(value = "/notes/{id}")
    public void updateNotes(@RequestBody Notes notes, @PathVariable int id) {
        if (notes.getId() == null) {
            notes.setId(id);
        }

        if (notes.getId() != id) {
            throw new IllegalArgumentException("Notes ID must match parameter given");
        }
        notesRepo.save(notes);
    }
}
