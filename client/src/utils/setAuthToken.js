import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // Apply on every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete Auth Header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
