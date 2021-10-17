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

const TableContainer = styled.div`
  width: 60%;
  border-collapse: collapse;
  margin: 225px 300px;
  font-size: 1.2em;
  font-family: sans-serif;
  min-width: 1000px;
  box-shadow: 0 0 30px blue;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #009879;
  color: #ffffff;
  text-align: left;
  padding: 12px 15px;
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
                  <Button colorScheme="teal">
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
                    colorScheme="teal"
                    variant="solid"
                    size="md"
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
