import { AppState } from '../../reducer/root-reducer';
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { Status, Task, TasksState } from 'uiTypes';
import { todosRef } from "../../../firebase.config";

export interface Firebase {
  tasks?: TasksState;
  status: Status;
  error?: string;
}

const initialState: Firebase = { status: 'idle', tasks: undefined };

export const firebaseSlice = createSlice({
  name: 'firebase',
  initialState,
  reducers: {
    setFirebaseData (state:Firebase, action){
      state.tasks = action.payload;
      state.status = 'fulfilled';
    },
    clearFirebaseData(state:Firebase){
      Object.assign(state, initialState);
    }
  }
});

export const tasksSelector = createSelector(
  (state: AppState) => state.firebase,
  (firebase) => firebase.tasks
);

export const { setFirebaseData, clearFirebaseData } = firebaseSlice.actions;

export default firebaseSlice.reducer;
