import React from "react";
import UserService from "../services/UserService";

class UserComponent extends React.Component {
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
      <div>
        <h1 className="text-center"> Employee List </h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>User ID</td>
              <td>User First Name</td>
              <td>User Last Name </td>
              <td>User Department</td>
            </tr>
          </thead>

          <tbody>
            {this.state.employees.map((Employee) => (
              <tr key={Employee.id}>
                <td> {Employee.id}</td>
                <td> {Employee.firstName}</td>
                <td> {Employee.lastName}</td>
                <td> {Employee.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserComponent;
