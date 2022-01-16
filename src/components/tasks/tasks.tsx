
import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import tasksStyles from "./tasks.style";
import { Firebase, tasksSelector } from '../../redux/features/firebase/new-slice';
import { firebaseDbUpdate, firebaseGet, firebaseUpdate } from '../../redux/firebase';
import Board, { moveCard, updatedBoard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
import { kanbanDestination, kanbanSource, Task } from 'uiTypes';
import Card from '../card/card';
import Header from '../header/header';


const board2 = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Card title 1",
          description: "Card content"
        },
        {
          id: 2,
          title: "Card title 2",
          description: "Card content"
        },
        {
          id: 3,
          title: "Card title 3",
          description: "Card content"
        }
      ]
    },
    {
      id: 2,
      title: "Doing",
      cards: [
        {
          id: 9,
          title: "Card title 9",
          description: "Card content"
        }
      ]
    },
    {
      id: 3,
      title: "Q&A",
      cards: [
        {
          id: 10,
          title: "Card title 10",
          description: "Card content"
        },
        {
          id: 11,
          title: "Card title 11",
          description: "Card content"
        }
      ]
    },
    {
      id: 4,
      title: "Production",
      cards: [
        {
          id: 12,
          title: "Card title 12",
          description: "Card content"
        },
        {
          id: 13,
          title: "Card title 13",
          description: "Card content"
        }
      ]
    }
  ]
};


const TasksList:FC = () => {
    const styles = tasksStyles();
    const tasks = useSelector(tasksSelector);
    const [board, setBoard] = useState<any>(board2);
    const [move, setMove] = useState<boolean>(false)
    const [render,setRender] = useState<boolean>(true)

    useEffect(() => {
      !tasks && firebaseGet();
    },[tasks])

    useEffect(() => {
      if(tasks){
        setBoard(tasks)
      }

    },[tasks])

    useEffect(() => {
    },[board])

    useEffect(() => {
      !render && setRender(true)
    },[render])


        const onCardMove = async (board:Firebase, card:Task, source:kanbanSource, destination:kanbanDestination) => {
          console.log(board)
          const _card:Task = {
            ...card,
            done : destination.toColumnId === 1 ? false : true,
            position : destination.toPosition,
            column : destination.toColumnId
           }
          await firebaseUpdate(_card)
          await firebaseGet();

          const updatedBoard = moveCard(board, source, destination);
          setBoard(board)
          firebaseDbUpdate(updatedBoard)
        }


        return (
          <>
                        { <span onClick={() => setRender( !render)}>render</span>}
          {board && render &&
          <>

              {  <Board
              renderColumnHeader={({ title }:{title:string}) => <Header title={title} /> }
              allowRemoveCard
              onCardDragEnd={onCardMove}
              onCardRemove={console.log}
              initialBoard={board}
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
