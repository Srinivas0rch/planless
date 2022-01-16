import { AppState } from '../../reducer/root-reducer';
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { Status, Task, TasksState } from 'uiTypes';
import { todosRef } from "../../../firebase.config";

export interface Firebase {
  tasks?: TasksState;
  status: Status;
  error?: string;
}

/*
getTasks(state: Firebase) {
      todosRef.on('value', (snapshot) => {
        let items = snapshot.val();
        let newState: Task[] = [];
        for (let item in items) {
          newState.push({
            id: item,
            title: items[item].title,
            done: items[item].done,
            dueDate: items[item].dueDate
          });
        }
        console.log('redux items', newState)
        state.tasks = snapshot.val();
      });
    },
    createTasks(state: Firebase, action) {
      todosRef.push(action.payload).then(r => {
        console.log('--r', r)
      });
    }
*/

const initialState: Firebase = { status: 'idle' };


export const firebaseSlice = createSlice({
  name: 'firebase',
  initialState,
  reducers: {
    setFirebaseData (state:Firebase, action){
      state.tasks = action.payload;
      state.status = 'fulfilled';
    }
  }
});

export const tasksSelector = createSelector(
  (state: AppState) => state.firebase,
  (firebase) => firebase.tasks
);

export const { setFirebaseData } = firebaseSlice.actions;

export default firebaseSlice.reducer;
