import axios from "axios";

const url = "http://localhost:7979/employee";

class UserService {
  getEmployees() {
    return axios.get(url);
  }

  deleteEmployees(id) {
    return axios.delete(url + "/" + id);
  }

  updateEmployee(id) {
    return axios.put(url + "/" + id);
  }
  
  addEmployees() {
    return axios.post(url);
  }
}

export default new UserService();
