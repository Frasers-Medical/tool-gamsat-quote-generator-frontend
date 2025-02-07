import axios from "axios";

axios.defaults.baseURL =
  "https://tool-gamsat-quote-generator-be-9e635c5f22b4.herokuapp.com/";

axios.defaults.headers.common["Content-Type"] = "application/json";

export const APIClient = axios.create({});
