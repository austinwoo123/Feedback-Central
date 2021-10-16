import React from "react";
import { useRef } from "react";
// import "./EmployeeInput.css";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

function NewEmployeeForm(props) {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const departmentInputRef = useRef();
  const positiveNoteInputRef = useRef();
  const needsImprovementNoteInputRef = useRef();
  const noteInputRef = useRef();

  // const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredDepartment = departmentInputRef.current.value;
    const enteredPositive = positiveNoteInputRef.current.value;
    const enteredNeedImprovement = needsImprovementNoteInputRef.current.value;
    const enteredNote = noteInputRef.current.value;

    const employeeData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      department: enteredDepartment,
      notes: [
        {
          positives: enteredPositive,
          needImprovement: enteredNeedImprovement,
          note: enteredNote,
        },
      ],
      // postives: enteredPositive,
      // needImprovement: enteredNeedImprovement,
      // note: enteredNote,
      // description: enteredDescription
    };
    console.log(employeeData);
    props.onEmployeeAdd(employeeData);
  }

  return (
    <Box
      borderRadius="25px"
      display="flex"
      flex-direction="column"
      align-items="center"
      max-width="60%"
      bg="#F5F5DC"
      p={4}
      color="black"
    >
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">First Name:</label>
          <input
            className="inputField"
            type="text"
            required
            id="firstName"
            ref={firstNameInputRef}
          />
        </div>
        <div>
          <label htmlFor="title">Last Name:</label>
          <input type="text" required id="lastName" ref={lastNameInputRef} />
        </div>
        <div>
          <label htmlFor="title">Department:</label>
          <input
            type="text"
            required
            id="department"
            ref={departmentInputRef}
          />
        </div>
        <div>
          <label htmlFor="title">Positive Notes:</label>
          <input
            type="text"
            required
            id="positiveNote"
            ref={positiveNoteInputRef}
          />
        </div>
        <div>
          <label htmlFor="title">Needs Improvement Notes:</label>
          <input
            type="text"
            required
            id="needsImprovementNote"
            ref={needsImprovementNoteInputRef}
          />
        </div>
        <div>
          <label htmlFor="title">Notes:</label>
          <input type="text" required id="note" ref={noteInputRef} />
        </div>
        <div>
          <button>Add Employee</button>
        </div>
      </form>
    </Box>
  );
}

export default NewEmployeeForm;
