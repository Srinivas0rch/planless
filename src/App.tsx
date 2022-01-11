import React, { FC } from 'react';
import useAppStyles from "./App.style";
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Task from './components/tasks/tasks';
import Form from './form/form';


const App: FC = () => {

  const styles = useAppStyles();
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Grid container justifyContent="space-between" spacing={4}>

      <Grid item container direction="column" xs={6} justifyContent="center">
        <Form />
      </Grid>
        <Grid item container direction="column" xs={6} justifyContent="center">
          <Task />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
