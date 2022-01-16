import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Button, FormControl, TextField } from '@material-ui/core';
import { Task } from 'uiTypes';
import cardStyles from "./cardEdit.style";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

interface CardEdit {
  onClose : Dispatch<SetStateAction<boolean>>
}

const CardEdit:FC<CardEdit> = ({onClose}) => {

    const styles = cardStyles();
    const [title, setTitle] = useState<string>("");
    const [date, setDate] = useState<Date | null>(
      new Date(),
    );



    const handleDateChange = async (newValue: Date | null) => {
      setDate(newValue);
    };

    const closeEdit = () => {
      onClose(false)
    }

    return (
      <div>
        <div className={styles.card}>
          <FormControl className={styles.formSpace}>
          <TextField
          label="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Due Date"
          inputFormat="MM/dd/yyyy"
          value={date}
          onChange={handleDateChange}
          renderInput={(params:any) => <TextField {...params} />}
        />
        </LocalizationProvider>
        </FormControl>

        </div>
        <span className={styles.actions}>
            <Button className={styles.button}>Save</Button>
            <Button className={styles.button} onClick={closeEdit}>Cancel</Button>
        </span>
        </div>
    )
  }

  export default CardEdit;
