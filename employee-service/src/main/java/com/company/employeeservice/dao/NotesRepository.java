package com.company.employeeservice.dao;

import com.company.employeeservice.dto.Notes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotesRepository extends JpaRepository<Notes, Integer> {

    List<Notes> findByEmployeeId(Integer id);
}
