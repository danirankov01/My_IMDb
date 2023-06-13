import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "40e63da5171b4e6fa4b6a5d2102044d5",
  },
});
