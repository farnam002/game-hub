import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "046fbf43e12f4b08bdc0ce5006772ae3",
  },
});
