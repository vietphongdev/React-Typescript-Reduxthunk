import { createStore, applyMiddleware } from "redux";
import RootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type Store = ReturnType<typeof RootReducer>;
