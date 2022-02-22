import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import reducer from "./reducer";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;