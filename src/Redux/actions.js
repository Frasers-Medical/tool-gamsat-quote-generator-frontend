import {
  getQuotes,
  getThemes,
  getGamsatThemes,
} from "../Services/quoteService";

// QUOTES
export const getQuotesAction = (taskATheme, taskBTheme) => {
  return (dispatch) => {
    dispatch(getQuotesRequest());
    getQuotes(taskATheme, taskBTheme)
      .then((response) => {
        return response;
      })
      .then((responseData) => {
        dispatch(getQuotesSuccess(responseData));
      })
      .catch((error) => {
        dispatch(getQuotesFailure(error));
      });
  };
};

export const GET_QUOTES_REQUEST = "GET_QUOTES_REQUEST";
const getQuotesRequest = () => ({
  type: GET_QUOTES_REQUEST,
});

export const GET_QUOTES_SUCCESS = "GET_QUOTES_SUCCESS";
const getQuotesSuccess = (response) => ({
  type: GET_QUOTES_SUCCESS,
  response: response,
});

export const GET_QUOTES_FAILURE = "GET_QUOTES_FAILURE";
const getQuotesFailure = (error) => ({
  type: GET_QUOTES_FAILURE,
  error: error,
});

export const RESET_QUOTES = "RESET_QUOTES";
export const resetQuotesAction = () => ({
  type: RESET_QUOTES,
});

// THEMES
export const getThemesAction = () => {
  return (dispatch) => {
    dispatch(getThemesRequest());
    getThemes()
      .then((response) => {
        return response;
      })
      .then((responseData) => {
        dispatch(getThemesSuccess(responseData));
      })
      .catch((error) => {
        dispatch(getThemesFailure(error));
      });
  };
};

export const GET_THEMES_REQUEST = "GET_THEMES_REQUEST";
const getThemesRequest = () => ({
  type: GET_THEMES_REQUEST,
});

export const GET_THEMES_SUCCESS = "GET_THEMES_SUCCESS";
const getThemesSuccess = (response) => ({
  type: GET_THEMES_SUCCESS,
  response: response,
});

export const GET_THEMES_FAILURE = "GET_THEMES_FAILURE";
const getThemesFailure = (error) => ({
  type: GET_THEMES_FAILURE,
  error: error,
});

// SELECTING THEME
export const SELECT_TASK_A_THEME = "SELECT_TASK_A_THEME";
export const selectTaskATheme = (theme) => ({
  type: SELECT_TASK_A_THEME,
  theme: theme,
});

export const SELECT_TASK_B_THEME = "SELECT_TASK_B_THEME";
export const selectTaskBTheme = (theme) => ({
  type: SELECT_TASK_B_THEME,
  theme: theme,
});

// TASK A/B TOGGLE
export const TOGGLE_TASK_A = "TOGGLE_TASK_A";
export const toggleTaskAAction = () => ({
  type: TOGGLE_TASK_A,
});

export const TOGGLE_TASK_B = "TOGGLE_TASK_B";
export const toggleTaskBAction = () => ({
  type: TOGGLE_TASK_B,
});

// SELECTING BREAKDOWN THEME
export const SELECT_TASK_A_BREAKDOWN_THEME = "SELECT_TASK_A_BREAKDOWN_THEME";
export const selectTaskABreakdownThemeAction = (theme) => ({
  type: SELECT_TASK_A_BREAKDOWN_THEME,
  theme: theme,
});

export const SELECT_TASK_B_BREAKDOWN_THEME = "SELECT_TASK_B_BREAKDOWN_THEME";
export const selectTaskBBreakdownThemeAction = (theme) => ({
  type: SELECT_TASK_B_BREAKDOWN_THEME,
  theme: theme,
});

// Gamsat Themes
export const getGamsatThemesAction = () => {
  return (dispatch) => {
    dispatch(getGamsatThemesRequest());
    getGamsatThemes()
      .then((response) => {
        return response;
      })
      .then((responseData) => {
        dispatch(getGamsatThemesSuccess(responseData));
      })
      .catch((error) => {
        dispatch(getGamsatThemesFailure(error));
      });
  };
};

export const GET_GAMSAT_THEMES_REQUEST = "GET_GAMSAT_THEMES_REQUEST";
const getGamsatThemesRequest = () => ({
  type: GET_GAMSAT_THEMES_REQUEST,
});

export const GET_GAMSAT_THEMES_SUCCESS = "GET_GAMSAT_THEMES_SUCCESS";
const getGamsatThemesSuccess = (response) => ({
  type: GET_GAMSAT_THEMES_SUCCESS,
  response: response,
});

export const GET_GAMSAT_THEMES_FAILURE = "GET_GAMSAT_THEMES_FAILURE";
const getGamsatThemesFailure = (error) => ({
  type: GET_GAMSAT_THEMES_FAILURE,
  error: error,
});

export const SELECT_GAMSAT = "SELECT_GAMSAT";
export const selectGamsatAction = (year, month) => ({
  type: SELECT_GAMSAT,
  year: year,
  month: month,
});
