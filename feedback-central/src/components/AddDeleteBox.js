import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react"
import PropTypes from 'prop-types';

function AddDeleteBox({ handler }) {

    return (
        <Box padding="3rem"
            marginLeft="3rem"
            marginTop="10rem"
            bg="gray"
            w="400px"
            h="650px"
            p={4}
            color="white"
            onSubmit={handler} >

            Hi ...

            <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="First Name" name="First Name" />
            </FormControl>
            <FormControl id="lastName" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Last Name" name="Last Name" />
            </FormControl>
            <FormControl id="department" isRequired>
                <FormLabel>Department</FormLabel>
                <Input placeholder="Department" name="Department" />
            </FormControl>
            <div>
                <Button colorScheme="teal" type="submit">Add</Button>
            </div>
        </Box>

    );

    AddDeleteBox.propTypes = {
        handler: PropTypes.func.isRequired,
    }

}
export default AddDeleteBox;