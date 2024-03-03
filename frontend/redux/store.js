import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reducerEvents from "./reducers/reducerEvent";
import reducerComments from "./reducers/reducerComments";

const rootReducer = combineReducers({
  events: reducerEvents,
  comments: reducerComments,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
