import {
  GET_QUOTES_SUCCESS,
  GET_THEMES_REQUEST,
  GET_THEMES_SUCCESS,
  SELECT_TASK_A_THEME,
  SELECT_TASK_B_THEME,
  TOGGLE_TASK_A,
  TOGGLE_TASK_B,
  SELECT_TASK_A_BREAKDOWN_THEME,
  SELECT_TASK_B_BREAKDOWN_THEME,
  GET_GAMSAT_THEMES_SUCCESS,
  SELECT_GAMSAT,
  RESET_QUOTES,
} from "../actions";

const initialState = {
  // Active Quotes and Themes
  task_a_theme: null,
  task_a_quotes: [],
  task_b_theme: null,
  task_b_quotes: [],

  // Quote Breakdown
  task_a_breakdown_theme: null,
  task_b_breakdown_theme: null,

  // Listing Themes
  task_a_themes: [],
  task_b_themes: [],

  // Listing Gamsat Themes
  gamsat_themes: [],
  gamsat_title: null,

  // Task A/B Toggles
  task_a_toggle: true,
  task_b_toggle: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_QUOTES_SUCCESS: {
      const response = action.response;
      return {
        ...state,
        task_a_theme: response.task_a_theme,
        task_a_quotes: response.task_a_quotes.map((quote) => quote),
        task_b_theme: response.task_b_theme,
        task_b_quotes: response.task_b_quotes.map((quote) => quote),
      };
    }
    case GET_THEMES_REQUEST: {
      return {
        ...state,
        task_a_theme: null,
        task_b_theme: null,
      };
    }
    case GET_THEMES_SUCCESS: {
      const response = action.response;
      return {
        ...state,
        task_a_themes: response.task_a_themes,
        task_b_themes: response.task_b_themes,
      };
    }
    case RESET_QUOTES: {
      return {
        ...state,
        task_a_theme: null,
        task_b_theme: null,
        gamsat_title: null,
      };
    }
    case SELECT_TASK_A_THEME: {
      const theme = action.theme;
      return {
        ...state,
        task_a_theme: theme,
      };
    }
    case SELECT_TASK_B_THEME: {
      const theme = action.theme;
      return {
        ...state,
        task_b_theme: theme,
      };
    }
    case TOGGLE_TASK_A: {
      return {
        ...state,
        task_a_toggle: !state.task_a_toggle,
      };
    }
    case TOGGLE_TASK_B: {
      return {
        ...state,
        task_b_toggle: !state.task_b_toggle,
      };
    }
    case SELECT_TASK_A_BREAKDOWN_THEME: {
      const theme = action.theme;
      return {
        ...state,
        task_a_breakdown_theme: theme,
      };
    }
    case SELECT_TASK_B_BREAKDOWN_THEME: {
      const theme = action.theme;
      return {
        ...state,
        task_b_breakdown_theme: theme,
      };
    }
    case GET_GAMSAT_THEMES_SUCCESS: {
      const response = action.response;
      return {
        ...state,
        gamsat_themes: response,
      };
    }
    case SELECT_GAMSAT: {
      const year = action.year;
      const month = action.month;
      return {
        ...state,
        gamsat_title: `${year} - ${month}`,
      };
    }
    default:
      return state;
  }
}
