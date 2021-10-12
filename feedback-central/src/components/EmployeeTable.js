import { Link } from 'react-router-dom'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button
} from "@chakra-ui/react"

function EmployeeTable() {

    return (
        <Table variant="striped" size="xs" marginTop="10rem" >
            <TableCaption>List of Employees</TableCaption>
            <Thead>
                <Tr>
                    <Th>First Name</Th>
                    <Th>Last Name</Th>
                    <Th>Department</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Austin</Td>
                    <Td>Woo</Td>
                    <Td>Back-End</Td>
                    <Td>
                        <Button colorScheme="teal">
                            <Link to="/view" className="nav-link active" href="./pages/View">View</Link>
                        </Button>
                    </Td>
                </Tr>
                <Tr>
                    <Td>Marcus</Td>
                    <Td>Ramirez</Td>
                    <Td>Front-End</Td>
                </Tr>
                <Tr>
                    <Td>Gose</Td>
                    <Td>Garcia</Td>
                    <Td>Back-End</Td>
                </Tr>
                <Tr>
                    <Td>Austin</Td>
                    <Td>Woo</Td>
                    <Td>Back-End</Td>
                </Tr>
                <Tr>
                    <Td>Marcus</Td>
                    <Td>Ramirez</Td>
                    <Td>Front-End</Td>
                </Tr>
                <Tr>
                    <Td>Gose</Td>
                    <Td>Garcia</Td>
                    <Td>Back-End</Td>
                </Tr>
                <Tr>
                    <Td>Austin</Td>
                    <Td>Woo</Td>
                    <Td>Back-End</Td>
                </Tr>
                <Tr>
                    <Td>Marcus</Td>
                    <Td>Ramirez</Td>
                    <Td>Front-End</Td>
                </Tr>
                <Tr>
                    <Td>Gose</Td>
                    <Td>Garcia</Td>
                    <Td>Back-End</Td>
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
    )
}

export default EmployeeTable;

