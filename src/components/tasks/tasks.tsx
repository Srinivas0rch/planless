import React, { FC, useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import tasksStyles from "./tasks.style";
import { tasksSelector } from '../../redux/features/firebase/new-slice';
import { todosRef } from '../../firebase.config';

const Task:FC = () => {
    const styles = tasksStyles();
    const dispatch = useDispatch();
    // tasks from redux
    const tasks = useSelector(tasksSelector);
    const [todos,setTodos]  = useState<any>([]);

    // move to redux # context of use is not reliable.
    useEffect(() => {
      todosRef.on('value', (snapshot) => {
        let items = snapshot.val();
        let newState = [];
        for (let item in items) {
          newState.push({
            id: item,
            task: items[item].task,
            done: items[item].done
          });
        }
        setTodos(newState)
      });
    },[])

    return (
        <List className={styles.root}>
            {todos && todos.map((todo: any, i: number) => {
                return (
                    <ListItem key={todo.id}
                        role={undefined}
                        dense
                        button
                        onClick={() => {

                        }
                        }>
                        <IconButton color="primary">
                        </IconButton>
                        <ListItemText primary={todo.task}
                            className={todo.isChecked ? styles.marked : ''} />
                        <ListItemSecondaryAction>
                            <IconButton
                                edge="end"
                                aria-label="comments"
                                onClick={() => {

                                }}>
                                <IconButton />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default Task;
