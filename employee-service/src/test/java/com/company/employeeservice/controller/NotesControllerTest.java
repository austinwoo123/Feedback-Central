package com.company.employeeservice.controller;

import com.company.employeeservice.dao.EmployeeRepository;
import com.company.employeeservice.dao.NotesRepository;
import com.company.employeeservice.dto.Employee;
import com.company.employeeservice.dto.Notes;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.cloud.autoconfigure.RefreshAutoConfiguration;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(NotesController.class)
@ImportAutoConfiguration(RefreshAutoConfiguration.class)
public class NotesControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    NotesRepository noteRepo;

    private ObjectMapper mapper = new ObjectMapper();

    private String jsonObject;


    @Before
    public void setUp() throws Exception {
    }

    @Test
    public void shouldAddNotes() throws Exception {
        Notes inputNotes = new Notes();
        inputNotes.setId(1);
        inputNotes.setPositives("Positives");
        inputNotes.setNeedImprovement("Negatives");
        inputNotes.setNote("Hello World");

        // Convert Java Object to JSON.
        String inputJson = mapper.writeValueAsString(inputNotes);

        Notes outputNotes = new Notes();
        outputNotes.setId(1);
        outputNotes.setPositives("Positives");
        outputNotes.setNeedImprovement("Negatives");
        outputNotes.setNote("Hello World");

        String outputJson = mapper.writeValueAsString(outputNotes);

        // ACT
        mockMvc.perform(
                        post("/notes")                            // Perform the POST request.
                                .content(inputJson)                           // Set the request body.
                                .contentType(MediaType.APPLICATION_JSON)      // Tell the server it's in JSON format.
                )
                .andDo(print())                                // Print results to console.
                .andExpect(status().isCreated())               // ASSERT (status code is 201)
                .andExpect(content().json(outputJson));        // ASSERT that what we're expecting is what we got back.
    }


    @Test
    public void shouldDeleteNotes() throws Exception {
        // This method returns nothing, so we're just checking for the correct status code.
        // In this case, code 204, which indicates No Content. We will test deletes deeper in the future.
        mockMvc.perform(delete("/notes/1"))
                .andDo(print())
                .andExpect(status().isNoContent());
    }


    @Test
    public void shouldUpdateNotes() throws Exception {
        // ARRANGE
        Notes inputNotes = new Notes();
        inputNotes.setPositives("William");
        inputNotes.setNeedImprovement("Joel");
        inputNotes.setNote("Engineer");
        inputNotes.setId(2);
        inputNotes.setEmployeeId(2);

        String inputJson = mapper.writeValueAsString(inputNotes);

        // ACT
        mockMvc.perform(
                        put("/notes/2")
                                .content(inputJson)
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isNoContent()); // ASSERT that we got back 204 NO CONTENT.

        // ACT
        mockMvc.perform(
                        get("/notes/2")
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print());
//                .andExpect(content().json(inputJson)); // ASSERT that the record was updated successfully.
    }
}