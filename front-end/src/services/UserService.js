import axios from "axios";

const url = "http://localhost:7979/employee";

class UserService {
  getEmployees() {
    return axios.get(url);
  }

  deleteEmployees() {
    return axios.delete(url);
  }

  addEmployees() {
    return axios.post(url);
  }
}

export default new UserService();
