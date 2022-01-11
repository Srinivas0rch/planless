import { combineReducers } from "@reduxjs/toolkit";
import firebase from "../features/firebase/new-slice";


const reducers = {
  firebase
};

const appReducer = combineReducers(reducers);

const rootReducer = (
  state: ReturnType<typeof appReducer> | undefined,
  action: any
) => {
  if (action.type === "RESET_APP") {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      sessionStorage.clear();
      state = undefined;
    }
  }
  return appReducer(state, action);
};


export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
