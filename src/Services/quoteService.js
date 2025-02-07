import { APIClient } from "./apiClient";

const get = (path) => APIClient.get(path);
const post = (path, data = {}) => APIClient.post(path, data);
const patch = (path, data = {}) => APIClient.patch(path, data);

export const getQuotes = (taskATheme, taskBTheme) =>
  get(
    `/api/quotes?${taskATheme ? `task_a_theme=${taskATheme}` : ""}&${taskBTheme ? `task_b_theme=${taskBTheme}` : ""}`,
  );
export const getThemes = () => get(`/api/quotes/themes`);
export const getGamsatThemes = () => get(`/api/quotes/gamsat`);
