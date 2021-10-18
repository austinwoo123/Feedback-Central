import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DeleteIcon } from "@chakra-ui/icons";
import { Link, Router } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  Text,
} from "@chakra-ui/react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import UserService from "../../services/UserService";
import { Textarea } from "@chakra-ui/react"
import EditableText from './EditableText';
import { assertPipelineTopicExpression } from "@babel/types";
import api from "../../api";

const TableContainer = styled.div`
  width: 60%;
  border-collapse: collapse;
  margin: 100px 300px;
  font-size: 1.1em;
  font-family: sans-serif;
  min-width: 1000px;
  background-color: rgba(255,255,255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  padding: 15px 20px;
  border-bottom: 1px solid #dddddd;
`;

const EmployeeTable = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     employees: [],
  //   };
  // }

  const [employees, setEmployees] = useState([]);

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const departmentInputRef = useRef();
  const positiveNoteInputRef = useRef();
  const needsImprovementNoteInputRef = useRef();
  const noteInputRef = useRef();

  // componentDidMount() {
  //   UserService.getEmployees().then((response) => {
  //     this.setState({ employees: response.data });
  //   });
  // }

  useEffect(() => {
    UserService.getEmployees().then((response) => {
      setEmployees(response.data);
    });
  }, []);

  // function updateEmployee(employeeData) {
  //   const url = "http://localhost:7979/employee" + employeeData.id;
  //   fetch(url, {
  //     method: "PUT",
  //     body: JSON.stringify(employeeData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then(() => {
  //     window.location.reload();
  //   });
  // }

  // function handleUpdate(id) {
  //   const enteredFirstName = firstNameInputRef.value;
  //   const enteredLastName = lastNameInputRef.value;
  //   const enteredDepartment = departmentInputRef.value;
  //   const enteredPositive = positiveNoteInputRef.value;
  //   const enteredNeedImprovement = needsImprovementNoteInputRef.value;
  //   const enteredNote = noteInputRef.value;
  //   const employeeData = {
  //     id: id,
  //     firstName: enteredFirstName,
  //     lastName: enteredLastName,
  //     department: enteredDepartment,
  //     notes: [
  //       {
  //         positives: enteredPositive,
  //         needImprovement: enteredNeedImprovement,
  //         note: enteredNote,
  //       },
  //     ],
  //     // postives: enteredPositive,
  //     // needImprovement: enteredNeedImprovement,
  //     // note: enteredNote,
  //     // description: enteredDescription
  //   };
  //   console.log(employeeData);
  //   updateEmployee(employeeData)
  // }

  const updateEmployee = useMutation(({ payload, id }) =>
    api.update(payload, id)
  );

  function handleUpdate(event) {
    const updatedEmployee = {
      ...employees.find(
        ({ id }) =>
          id ===
          Number(event.target.dataset.id)
      ),
      ...{ [event.target.dataset.key]: event.target.value },
    };

    console.log(updatedEmployee);
    updateEmployee.mutate({
      payload: updatedEmployee,
      id: event.target.dataset.id,
    });
  }

  function handleDelete(id) {
    UserService.deleteEmployees(id)
      .then((data) => window.location.reload())
      .catch((err) => console.log(err));
  }

  // render() {
  return (
    <TableContainer>
      <Table>
        <TableCaption>Employee List</TableCaption>
        <Thead>
          <Tr>
            <Th>User ID</Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Department</Th>
            <Th>Postive Notes</Th>
            <Th>Needs Improvement</Th>
            <Th>Other Notes</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((Employee) => (
            <Tr key={Employee.id} data-id={Employee.id}>
              <Td>{Employee.id}</Td>
              <Td>
                <EditableText
                  value={Employee.firstName}
                  handler={handleUpdate}
                  employeeKey="firstName"
                  id={Employee.id}
                />
              </Td>
              {/* <Td>{Employee.firstName}</Td> */}
              <Td>
                <EditableText
                  value={Employee.lastName}
                  handler={handleUpdate}
                  employeeKey="lastName"
                  id={Employee.id}
                />
              </Td>
              {/* <Td>{Employee.lastName}</Td> */}
              <Td>
                <EditableText
                  value={Employee.department}
                  handler={handleUpdate}
                  employeeKey="department"
                  id={Employee.id}
                />
              </Td>
              {/* <Td>{Employee.department}</Td> */}
              {Employee.notes.map((note) => (
                <>
                  <Td>
                    <EditableText
                      value={note.positives}
                      handler={handleUpdate}
                      employeeKey="positives"
                      id={Employee.id}
                    />
                  </Td>
                  {/* <Td>{note.positives}</Td> */}
                  <Td>
                    <EditableText
                      value={note.needImprovement}
                      handler={handleUpdate}
                      employeeKey="needImprovement"
                      id={Employee.id}
                    />
                  </Td>
                  {/* <Td>{note.needImprovement}</Td> */}
                  <Td>
                    <EditableText
                      value={note.note}
                      handler={handleUpdate}
                      employeeKey="note"
                      id={Employee.id}
                    />
                  </Td>
                  {/* <Td>{note.note}</Td> */}
                </>
              ))}
              <Td>
                <Button colorScheme="blue">
                  View
                  {/* <Router>
                    <Link
                      to="/view"
                      className="nav-link active"
                      href="./pages/View"
                    >
                      View
                    </Link>
                  </Router> */}
                </Button>
              </Td>
              <Td>
                <Button
                  leftIcon={<DeleteIcon />}
                  colorScheme="red"
                  variant="solid"
                  size="md"
                  onClick={() => handleDelete(Employee.id)}
                // padding="20px"
                // onClick={handleDelete}
                // data-id={id}
                >
                  Delete 🔥
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th></Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
  // }
}

export default EmployeeTable;
