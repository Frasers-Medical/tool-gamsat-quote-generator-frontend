import axios from "axios";

axios.defaults.baseURL =
  "https://tool-gamsat-quotegenerator-be-0c00c9324741.herokuapp.com/";

axios.defaults.headers.common["Content-Type"] = "application/json";

export const APIClient = axios.create({});
