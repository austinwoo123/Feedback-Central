import React from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

export default class EmployeeInput extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    department: "",
  };

  handleChange = (event) => {
    this.setState({ firstName: event.target.value });
    this.setState({ lastName: event.target.value });
    this.setState({ department: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      department: this.state.department,
    };

    axios.post(`http://localhost:7979/employee`, { employee }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <Box
        borderRadius="25px"
        padding="3rem"
        marginLeft="8rem"
        marginTop="10rem"
        marginBottom="10rem"
        bg="teal"
        w="1000px"
        h="500px"
        p={4}
        color="white"
      >
        <FormLabel fontSize="40px">Feedback Central</FormLabel>
        <FormControl
          onSubmit={this.handleSubmit}
          marginTop="80px"
          marginLeft="40px"
          id="firstName"
        >
          {/* <FormLabel marginLeft="65px">First Name</FormLabel> */}
          <Input
            type="text"
            w="200px"
            placeholder="Enter your first name"
            name="First Name"
            onSubmit={this.handleSubmit}
          />
          <Input
            w="200px"
            marginLeft="65px"
            placeholder="Positive Note"
            name="First Name"
            onChange={this.handleChange}
          />
        </FormControl>
        <FormControl marginTop="50px" marginLeft="40px" id="lastName">
          {/* <FormLabel marginLeft="65px">Last Name</FormLabel> */}
          <Input
            w="200px"
            placeholder="Enter your last name"
            name="Last Name"
            onChange={this.handleChange}
          />
          <Input
            w="200px"
            marginLeft="65px"
            placeholder="Needs Improvement Note"
            name="First Name"
            onChange={this.handleChange}
          />
        </FormControl>
        <FormControl marginTop="50px" marginLeft="40px" id="department">
          {/* <FormLabel marginLeft="65px">Department</FormLabel> */}
          <Input
            w="200px"
            placeholder="Enter your department name"
            name="Department"
            onChange={this.handleChange}
          />
          <Input
            w="200px"
            marginLeft="65px"
            placeholder="Additional Notes"
            name="First Name"
            onChange={this.handleChange}
          />
        </FormControl>
        <div>
          <Button
            type="submit"
            // onSubmit={this.handleSubmit}
            // onChange={this.handleChange}
            onClick={this.handleSubmit}
            // onClick={this.handleChange}
            id="add"
            marginTop="50px"
            marginLeft="215px"
            colorScheme="teal"
          >
            Add Employee
          </Button>
        </div>
      </Box>
    );
  }

  // componentDidMount() {
  //     UserService.addEmployees().then(response => {
  //         console.log(response)
  //       this.setState({ employees: response.data });
  //     });
  //   }
}
