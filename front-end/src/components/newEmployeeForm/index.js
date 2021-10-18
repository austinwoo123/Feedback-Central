import React from "react";
import { useRef } from "react";
import "./index.css";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { TextArea } from "semantic-ui-react";
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
      width="1000px"
      height="475px"
      bg="rgba(255,255,255, 0.8)"
      // p={4}
      color="black"
      margin="20px"
      padding="20px"
    >
      <form onSubmit={submitHandler}>
        <div className="firstName">
          <strong> <label htmlFor="title">First Name:</label></strong>
          <input
            className="inputField"
            type="text"
            required
            id="firstName"
            ref={firstNameInputRef}
          />
        </div>
        <div className="lastName">
          <strong> <label htmlFor="title">Last Name: </label> </strong>
          <input type="text" required id="lastName" ref={lastNameInputRef} />
        </div>
        <div className="department">
          <strong> <label htmlFor="title">Department: </label></strong>
          <input
            type="text"
            required
            id="department"
            ref={departmentInputRef}
          />
        </div>
        <div className="positiveNote">
          <strong><label htmlFor="title">Positive Notes:</label></strong>
          <input
            type="text"
            required
            id="positiveNote"
            ref={positiveNoteInputRef}
            size="sm"
          />
        </div>
        <div className="needImprovement">
          <strong><label htmlFor="title">Needs Improvement Notes:</label></strong>
          <input
            type="text"
            required
            id="needsImprovementNote"
            ref={needsImprovementNoteInputRef}
          />
        </div>
        <div className="notes">
          <strong><label htmlFor="title">Notes: </label></strong>
          <input
            className="noteInput"
            type="text"
            required
            id="note"
            ref={noteInputRef}
          />
        </div>
        <div className="button">
          <button>Add Employee</button>
        </div>
      </form>
    </Box>
  );
}
export default NewEmployeeForm;
