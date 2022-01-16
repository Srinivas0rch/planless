import React, { FC, useState } from 'react';
import CardEdit from '../cardEdit/cardEdit';
import headerStyles from "./header.style";

interface HeaderProps {
  title?: string;
}


const Header:FC<HeaderProps> = ({ title }) => {

    const styles = headerStyles();
    const [editMode, setEditMode] = useState(false)

    return (
    <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        {editMode ? (
        <CardEdit onClose={setEditMode} done={ title === 'completed'} />
      ) : (
        <button type='button' onClick={() => setEditMode(true)} className={styles.button}>Add Card</button>
      )}
    </div>
    )
  }

  export default Header;
