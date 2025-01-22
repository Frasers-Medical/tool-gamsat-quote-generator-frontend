import { APIClient } from "./apiClient";

const get = (path) => APIClient.get(path);
// eslint-disable-next-line no-unused-vars
const post = (path, data = {}) => APIClient.post(path, data);

// eslint-disable-next-line no-unused-vars
const patch = (path, data = {}) => APIClient.patch(path, data);

export const getQuotes = (taskATheme, taskBTheme) =>
  get(
    `/api/quotes?${taskATheme ? `task_a_theme=${taskATheme}` : ""}&${taskBTheme ? `task_b_theme=${taskBTheme}` : ""}`,
  );
export const getThemes = () => get(`/api/quotes/themes`);
export const getGamsatThemes = () => get(`/api/quotes/gamsat`);
