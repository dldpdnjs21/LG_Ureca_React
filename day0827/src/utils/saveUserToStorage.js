import axios from "axios";

export const saveUsersToStorage = (user) => {
  axios.put("http://localhost:8080/person/upform", user);
};
