import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const authApi = {
  register(credentials) {
    return axios.post("users/signup", credentials).then((responce) => {
      token.set(responce.data.token);
      return responce.data;
    });
  },
  login(credentials) {
    return axios.post("users/login", credentials).then((responce) => {
      token.set(responce.data.token);
      return responce.data;
    });
  },
  logout() {
    return axios.post("users/logout").then();
  },
  current(currentToken) {
    token.set(currentToken);
    return axios.get("users/current").then((responce) => responce.data);
  },
};
