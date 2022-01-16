import React, { FC, useEffect } from 'react';
import useAppStyles from "./App.style";
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Form from './form/form';
import { todosRef } from './firebase.config';
import { setFirebaseData } from './redux/features/firebase/new-slice';
import { Status, Task } from 'uiTypes';
import TasksList from './components/tasks/tasks';

const App: FC = () => {

  return (
    <div className="App">
      <Grid container justifyContent="space-between" spacing={4}>
        <Grid item container direction="column" xs={12} justifyContent="center">
          <TasksList />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
