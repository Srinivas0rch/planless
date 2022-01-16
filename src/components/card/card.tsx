import React, { FC, useEffect, useState } from 'react';
import { FormControl, TextField } from '@material-ui/core';
import { Task } from 'uiTypes';
import cardStyles from "./card.style";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { firebaseUpdate } from '../../redux/firebase';

interface CardProps {
  className?: string;
  onMove?:() => void;
  task: Task;
  onDelete: () => void
}


const Card:FC<CardProps> = ({
    className,
    task,
    onMove,
    onDelete
  }) => {

    const styles = cardStyles();

    const [title, setTitle] = useState<string>("");
    const [date, setDate] = useState<Date | null>();
    const [disabled,setDisabled] = useState<boolean>(false);

    useEffect(() => {
      task && task.dueDate && setDate(task.dueDate as Date);
      task && task.title && setTitle(task.title);
    },[task])

    const handleTitleChange = async (value:string) => {
      const _task:Task = {
        ...task,
        title : title as string
      }
      await firebaseUpdate(_task)
      setTitle(value)
    }

    const handleDateChange = async (newValue: Date | null) => {
      const _task:Task = {
        ...task,
        title : title as string,
        dueDate : newValue?.toISOString()
      }
      await firebaseUpdate(_task)
      setDate(newValue);

    };

    const clickDelete = (e:any) => {
      onDelete()
      e.stopPropagation()
    }

    return (
        <div className={styles.card}>
          <FormControl className={styles.formSpace}>
          <TextField
          disabled={disabled}
          label="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={(e) => handleTitleChange(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          disabled={disabled}
          label="Due Date"
          inputFormat="MM/dd/yyyy"
          value={date}
          onChange={handleDateChange}
          renderInput={(params:any) => <TextField {...params} />}

        />
        </LocalizationProvider>
        </FormControl>
        </div>
    )
  }

  export default Card;
