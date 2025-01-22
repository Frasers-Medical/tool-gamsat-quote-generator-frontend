import {
  GET_QUOTES_REQUEST,
  GET_QUOTES_SUCCESS,
  GET_QUOTES_FAILURE,
  GET_THEMES_REQUEST,
  GET_THEMES_SUCCESS,
  GET_THEMES_FAILURE,
} from "../actions";

const initialState = {
  quotes: false,
  themes: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    // QUOTES
    case GET_QUOTES_REQUEST: {
      return {
        ...state,
        quotes: true,
      };
    }
    case GET_QUOTES_SUCCESS: {
      return {
        ...state,
        quotes: false,
      };
    }
    case GET_QUOTES_FAILURE: {
      return {
        ...state,
        quotes: false,
      };
    }

    // THEMES
    case GET_THEMES_REQUEST: {
      return {
        ...state,
        themes: true,
      };
    }
    case GET_THEMES_SUCCESS: {
      return {
        ...state,
        themes: false,
      };
    }
    case GET_THEMES_FAILURE: {
      return {
        ...state,
        themes: false,
      };
    }

    default:
      return state;
  }
}
