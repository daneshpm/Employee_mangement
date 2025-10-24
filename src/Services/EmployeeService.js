import axios from "axios";

const BASE_URL = "http://localhost:8080/api/employees";

class EmployeeService {
  getAll() {
    return axios.get(BASE_URL);
  }

  getById(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }

  create(employee) {
    return axios.post(BASE_URL, employee);
  }

  update(id, employee) {
    return axios.put(`${BASE_URL}/${id}`, employee);
  }

  delete(id) {
    return axios.delete(`${BASE_URL}/${id}`);
  }

  search(name) {
    return axios.get(`${BASE_URL}/search?name=${name}`);
  }

  getStats() {
    return axios.get(`${BASE_URL}/stats`);
  }
}

export default new EmployeeService();
