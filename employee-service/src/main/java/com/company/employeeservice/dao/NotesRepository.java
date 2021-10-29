package com.company.employeeservice.dao;

import com.company.employeeservice.dto.Notes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

//An interface is a reference type in Java. It is similar to class. It is a collection of abstract methods. A class implements an interface,
// thereby inheriting the abstract methods of the interface.
// Along with abstract methods, an interface may also contain constants, default methods, static methods, and nested types.
@Repository
public interface NotesRepository extends JpaRepository<Notes, Integer> {

    List<Notes> findByEmployeeId(Integer id);
}
