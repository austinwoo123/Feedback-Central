import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react"

function AddDeleteBox() {

    return (
        <Box padding="3rem"
            marginLeft="3rem"
            marginTop="10rem"
            bg="gray"
            w="400px"
            h="650px"
            p={4}
            color="white" >
            Hi ...

            <FormControl id="artist" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="First Name" name="First Name" />
            </FormControl>
            <FormControl id="album" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Last Name" name="Last Name" />
            </FormControl>
            <FormControl id="year" isRequired>
                <FormLabel>Department</FormLabel>
                <Input placeholder="Department" name="Department" />
            </FormControl>
            <div>
                <Button colorScheme="teal">Add</Button>
            </div>
        </Box>

    )

}
export default AddDeleteBox;