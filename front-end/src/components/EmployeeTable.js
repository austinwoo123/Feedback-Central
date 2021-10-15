import React from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
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
import api from "../api";
import UserService from "../services/UserService";

// const fetchRecords = async () => await api.index();

// function EmployeeTable() {
//   const { status, data, error } = useQuery("records", fetchRecords);

//   const queryClient = useQueryClient();

//   switch (status) {
//     case "loading":
//       return <Text>Loading...</Text>;
//     case "error":
//       return <Text color="tomato">{error.message}</Text>;
//     default:
//       return (

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
      <Table
        variant="striped"
        margin="auto"
        marginRight="400px"
        width="65%"
        padding="10px"
        borderRadius="25px"
        border="groove"
        marginTop="10px"
      >
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
                  <Link
                    to="/view"
                    className="nav-link active"
                    href="./pages/View"
                  >
                    View
                  </Link>
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
    );
  }
}

export default EmployeeTable;
