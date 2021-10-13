import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

function AddDeleteBox() {
  function waitForLoad(id, callback) {
    var timer = setInterval(function () {
      if (document.getElementById("add")) {
        clearInterval(timer);
        callback();
      }
    }, 100);
  }

  waitForLoad("add", function () {
    console.log("load successful, you can proceed!!");
    document.getElementById("add").onclick = function () {
      alert("I got clicked");
    };
  });

  return (
    <Box
      borderRadius="25px"
      padding="3rem"
      marginLeft="8rem"
      marginTop="10rem"
      bg="teal"
      w="600px"
      h="650px"
      p={4}
      color="white"
    >
      <FormLabel fontSize="40px">Hello User!</FormLabel>
      <FormControl marginTop="80px" marginLeft="40px" id="firstName">
        {/* <FormLabel marginLeft="65px">First Name</FormLabel> */}
        <Input
          w="200px"
          placeholder="Enter your first name"
          name="First Name"
        />
        <Input
          w="200px"
          marginLeft="65px"
          placeholder="Positive Note"
          name="First Name"
        />
      </FormControl>
      <FormControl marginTop="50px" marginLeft="40px" id="lastName">
        {/* <FormLabel marginLeft="65px">Last Name</FormLabel> */}
        <Input w="200px" placeholder="Enter your last name" name="Last Name" />
        <Input
          w="200px"
          marginLeft="65px"
          placeholder="Needs Improvement Note"
          name="First Name"
        />
      </FormControl>
      <FormControl marginTop="50px" marginLeft="40px" id="department">
        {/* <FormLabel marginLeft="65px">Department</FormLabel> */}
        <Input
          w="200px"
          placeholder="Enter your department name"
          name="Department"
        />
        <Input
          w="200px"
          marginLeft="65px"
          placeholder="Additional Notes"
          name="First Name"
        />
      </FormControl>
      <div>
        <Button id="add" marginTop="50px" marginLeft="215px" colorScheme="teal">
          Add Employee
        </Button>
      </div>
    </Box>
  );
}
export default AddDeleteBox;
