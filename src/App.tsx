import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
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
