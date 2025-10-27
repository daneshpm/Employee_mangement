import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  isAuthenticated() {
    const user = this.getCurrentUser();
    return user && user.token;
  }

  getAuthHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      return { Authorization: "Bearer " + user.token };
    } else {
      return {};
    }
  }
}

export default new AuthService();