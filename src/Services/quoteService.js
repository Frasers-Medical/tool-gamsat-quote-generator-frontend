import { APIClient } from "./apiClient";
import apiQuotes from "../Data/api_quotes.json";
import apiQuotesThemes from "../Data/api_quotes_themes.json";
import apiQuotesGamsat from "../Data/api_quotes_gamsat.json";

// eslint-disable-next-line no-unused-vars
const get = async (path) => {
  try {
    return await APIClient.get(path);
  } catch (error) {
    console.error(`Error fetching data from ${path}:`, error);
    throw error;
  }
};
// eslint-disable-next-line no-unused-vars
const post = (path, data = {}) => APIClient.post(path, data);

// eslint-disable-next-line no-unused-vars
const patch = (path, data = {}) => APIClient.patch(path, data);

export const getQuotes = async (taskATheme, taskBTheme) => {
  console.log("getQuotes", taskATheme, taskBTheme);
  return apiQuotes;
};
// export const getThemes = () => get(`/api/quotes/themes`);
export const getThemes = async () => {
  try {
    // eslint-disable-next-line import/no-unresolved
    return apiQuotesThemes;
  } catch (error) {
    console.error("Error fetching themes:", error);
    throw error;
  }
};
export const getGamsatThemes = async () => {
  try {
    // eslint-disable-next-line import/no-unresolved
    console.log(apiQuotesGamsat);
    return apiQuotesGamsat;
  } catch (error) {
    console.error("Error fetching themes:", error);
    throw error;
  }
};
