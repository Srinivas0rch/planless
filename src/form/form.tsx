import { Button, TextField } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Task } from 'uiTypes';
import { todosRef } from '../firebase.config';

const Form:FC = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

        // move to redux # context of use is not reliable.
        const createTodo = (e: React.FormEvent<EventTarget>) => {
            e.preventDefault();
            const task:Task = {
              title: value,
              dueDate: new Date(),
              done: false,
            };
            //dispatch(createTasks(task))

          };

        return(
            <form onSubmit={createTodo}>
            <TextField
              style={{ width: "100%" }}
              id="outlined-basic"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              label="Add Todo"
              variant="outlined"
            />
            <Button type='submit'>create todo</Button>
          </form>
        )

}

export default Form;
