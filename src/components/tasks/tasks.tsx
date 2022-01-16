
import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import tasksStyles from "./tasks.style";
import { Firebase, tasksSelector } from '../../redux/features/firebase/new-slice';
import { firebaseGet, firebaseUpdate } from '../../redux/firebase';
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
import { kanbanDestination, kanbanSource, Task } from 'uiTypes';
import Card from '../card/card';
import Header from '../header/header';


const TasksList:FC = () => {
    const styles = tasksStyles();
    const tasks = useSelector(tasksSelector);

    useEffect(() => {
      !tasks && firebaseGet();
    },[tasks])


        const onCardMove = async (board:Firebase, card:Task, source:kanbanSource, destination:kanbanDestination) => {
          const _card:Task = {
            ...card,
            done : destination.toColumnId === 1 ? false : true,
            position : destination.toPosition || source.fromPosition,
            column : destination.toColumnId
           }

          await firebaseUpdate(_card)
          const updatedBoard = moveCard(board, source, destination);

        }

        return (
          <>
          {tasks &&
          <>

              {  <Board
              renderColumnHeader={({ title }:{title:string}) => <Header title={title} /> }
              allowRemoveCard
              onCardDragEnd={onCardMove}
              onCardRemove={console.log}
              initialBoard={tasks}
              onNewCardConfirm={(draftCard:any) => ({
                id: new Date().getTime(),
                ...draftCard
              })}
              onCardNew={console.log}
              renderCard={(e:Task, { removeCard, dragging }:{ removeCard : () => void, dragging : () => void}) => {
                return(
                <Card task={e} onDelete={removeCard}  />

              )}}
                /> }
            </>
          }
          </>
        );
}

export default TasksList;
