import { combineReducers } from "redux";
import isLoading from "./isLoading";
import quotes from "./quotes";

export default combineReducers({ isLoading, quotes });
