import axios from "axios";

const url = "http://localhost:7979/employee";

class UserService {
  getEmployees() {
    return axios.get(url);
  }
<<<<<<< HEAD
=======

  deleteEmployees() {
    return axios.delete(url);
  }

  addEmployees() {
    return axios.post(url);
  }
>>>>>>> f38ab99963871bf68b7d1a9a7acd1b732b0a5b29
}

export default new UserService();
