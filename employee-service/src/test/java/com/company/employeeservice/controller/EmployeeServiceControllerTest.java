package com.company.employeeservice.controller;

import com.company.employeeservice.dao.EmployeeRepository;
import com.company.employeeservice.dto.Employee;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.cloud.autoconfigure.RefreshAutoConfiguration;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(EmployeeServiceController.class)
@ImportAutoConfiguration(RefreshAutoConfiguration.class)
public class EmployeeServiceControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    EmployeeRepository employeeRepo;

    private ObjectMapper mapper = new ObjectMapper();

    private String jsonObject;



    @Before
    public void setUp() throws Exception {

    }

    @Test
    public void shouldReturnAllEmployees() throws Exception {

        List<Employee> employeeList = Arrays.asList(new Employee(1,"Alex","Smith", "Sales", null));

        jsonObject= mapper.writeValueAsString(employeeList);

        when(employeeRepo.findAll()).thenReturn(employeeList);


        // ARRANGE and ACT
        mockMvc.perform(get("/employee"))       // Perform the GET request.
                .andDo(print())                          // Print results to console.
                .andExpect(status().isOk())
                .andExpect(content().json(jsonObject));

    }


    @Test
    public void shouldGetEmployeeById() throws Exception {

        Employee outputEmployee = new Employee();
        outputEmployee.setId(1);
        outputEmployee.setFirstName("Alex");
        outputEmployee.setLastName("Smith");
        outputEmployee.setDepartment("Sales");;

//        String outputJson = mapper.writeValueAsString(outputEmployee);

        // ARRANGE and ACT
        mockMvc.perform(get("/employee/1"))       // Perform the GET request.
                .andDo(print())                          // Print results to console.
                .andExpect(status().isOk());
    }


    @Test
    public void addEmployee() throws Exception {
        // ARRANGE
        Employee inputEmployee = new Employee();
        inputEmployee.setId(1);
        inputEmployee.setFirstName("Justin");
        inputEmployee.setLastName("Finley");
        inputEmployee.setDepartment("Sales");

        // Convert Java Object to JSON.
        String inputJson = mapper.writeValueAsString(inputEmployee);

        Employee outputEmployee = new Employee();
        outputEmployee.setId(1);
        outputEmployee.setFirstName("Justin");
        outputEmployee.setLastName("Finley");
        outputEmployee.setDepartment("Sales");

        String outputJson = mapper.writeValueAsString(outputEmployee);

        // ACT
        mockMvc.perform(
                        post("/employee")                            // Perform the POST request.
                                .content(inputJson)                           // Set the request body.
                                .contentType(MediaType.APPLICATION_JSON)      // Tell the server it's in JSON format.
                )
                .andDo(print())                                // Print results to console.
                .andExpect(status().isCreated())               // ASSERT (status code is 201)
                .andExpect(content().json(outputJson));        // ASSERT that what we're expecting is what we got back.
    }


//        // testing DELETE /records/{id}
    @Test
    public void shouldDeleteByIdAndReturn204StatusCode() throws Exception {

        // This method returns nothing, so we're just checking for the correct status code.
        // In this case, code 204, which indicates No Content. We will test deletes deeper in the future.
        mockMvc.perform(delete("/employee/1"))
                .andDo(print())
                .andExpect(status().isNoContent());
    }

    @Test
    public void shouldUpdateEmployee() throws Exception {

        // ARRANGE
        Employee inputEmployee = new Employee();
        inputEmployee.setFirstName("William");
        inputEmployee.setLastName("Joel");
        inputEmployee.setDepartment("Engineer");
        inputEmployee.setId(2);

        String inputJson = mapper.writeValueAsString(inputEmployee);

        // ACT
        mockMvc.perform(
                        put("/employee/2")
                                .content(inputJson)
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isNoContent()); // ASSERT that we got back 204 NO CONTENT.

        // ACT
        mockMvc.perform(
                        get("/employee/2")
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print());
//                .andExpect(content().json(inputJson)); // ASSERT that the record was updated successfully.
    }

    @Test
    public void shouldReturn404StatusCodeIfRecordNotFound() throws Exception {
        mockMvc.perform(get("/employee/-1"))
                .andDo(print())
                .andExpect(status().isNotFound());
    }


}