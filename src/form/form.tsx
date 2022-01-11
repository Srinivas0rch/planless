import { Button, TextField } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import { todosRef } from '../firebase.config';

const Form:FC = () => {
    const [value, setValue] = useState("");

        // move to redux # context of use is not reliable.
        const createTodo = (e: React.FormEvent<EventTarget>) => {
            e.preventDefault();
            const item = {
              task: value,
              done: false,
            };
            todosRef.push(item).then(r => console.log('--r', r));
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
