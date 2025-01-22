import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import rootReducer from "./Reducers";

// TODO: fix redux devtools
// import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

const middlewareEnhancer = applyMiddleware(thunk);
// const composedEnhancers = composeWithDevTools(middlewareEnhancer);
const composedEnhancers = compose(middlewareEnhancer);
export default createStore(rootReducer, composedEnhancers);
