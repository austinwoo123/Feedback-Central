import axios from "axios";

const url = "http://localhost:7979/employee";

class UserService {
  getEmployees() {
    return axios.get(url);
  }
}

export default new UserService();
