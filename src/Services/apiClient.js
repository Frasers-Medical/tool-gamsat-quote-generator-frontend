import axios from "axios";

// TODO: FIX backend url python mongo
axios.defaults.baseURL = "https://d3bn8hft5v4bch.cloudfront.net/";

axios.defaults.headers.common["Content-Type"] = "application/json";

export const APIClient = axios.create({});
