import axios from "axios";

axios.defaults.baseURL =
  "https://tool-gamsatquotegenerator-be-47ee72575a55.herokuapp.com/";

axios.defaults.headers.common["Content-Type"] = "application/json";

export const APIClient = axios.create({});
