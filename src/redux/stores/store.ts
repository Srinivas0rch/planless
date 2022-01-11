import rootReducer from "../reducer/root-reducer";
import { configureStore } from "@reduxjs/toolkit";
import authMiddleware from '../middlewares/authMiddleware';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
