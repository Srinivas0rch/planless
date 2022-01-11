import { AppState } from '../../reducer/root-reducer';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { Status } from 'uiTypes';
import {todosRef} from "../../../firebase.config";

export interface Firebase {
  tasks?: any[];
  status: Status;
  error?: string;
}

const initialState: Firebase = { status: 'idle' };

export const firebaseSlice = createSlice({
  name: 'firebase',
  initialState,
  reducers: {
    getTasks  (state: Firebase){},
    createTasks  (state: Firebase, action){
      const item = action.payload
      todosRef.push(item).then( r => {

      });
    }
  },
});

export const tasksSelector = createSelector(
  (state: AppState) => state.firebase,
  (firebase) => firebase.tasks
);

export const { getTasks, createTasks } = firebaseSlice.actions;
export default firebaseSlice.reducer;
