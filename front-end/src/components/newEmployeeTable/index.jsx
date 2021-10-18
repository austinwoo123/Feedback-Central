import React from "react";
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

class EmployeeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    UserService.getEmployees().then((response) => {
      this.setState({ employees: response.data });
    });
  }

  handleDelete(id) {
    UserService.deleteEmployees(id)
      .then((data) => window.location.reload())
      .catch((err) => console.log(err));
  }

  render() {
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
            {this.state.employees.map((Employee) => (
              <Tr key={Employee.id}>
                <Td>{Employee.id}</Td>
                <Td>{Employee.firstName}</Td>
                <Td>{Employee.lastName}</Td>
                <Td>{Employee.department}</Td>
                {Employee.notes.map((note) => (
                  <>
                    <Td>{note.positives}</Td>
                    <Td>{note.needImprovement}</Td>
                    <Td>{note.note}</Td>
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
                    onClick={() => this.handleDelete(Employee.id)}
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
  }
}

export default EmployeeTable;
