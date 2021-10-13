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

const fetchRecords = async () => await api.index();

function EmployeeTable() {
  const { status, data, error } = useQuery("records", fetchRecords);

  const queryClient = useQueryClient();

  switch (status) {
    case "loading":
      return <Text>Loading...</Text>;
    case "error":
      return <Text color="tomato">{error.message}</Text>;
    default:
      return (
        <Table
          variant="striped"
          margin="auto"
          marginRight="400px"
          width="65%"
          border="3px solid black"
          padding="10px"
        >
          <TableCaption>Employee List</TableCaption>
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Department</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Austin{data[0].firstName}</Td>
              <Td>Woo</Td>
              <Td>Back-End</Td>
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
            </Tr>
            <Tr>
              <Td>Marcus</Td>
              <Td>Ramirez</Td>
              <Td>Front-End</Td>
            </Tr>
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
