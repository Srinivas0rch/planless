import { Task } from "uiTypes";
import { todosRef } from "../firebase.config";
import { setFirebaseData } from "./features/firebase/new-slice";
import { store } from "./stores/store";
import { getDatabase, ref, set, update } from "firebase/database";

export const  firebaseGet = () => {
   todosRef.on('value', (snapshot) => {

    let items:any = snapshot.val();
    console.log('--items ---', items)
    //@ts-ignore
    const [columns] = Object.values(items)


     store.dispatch(setFirebaseData({ columns : columns}));
  });
}

export const firebaseUpdate = async (task:Task) => {
  console.log('-- task--', task)
  if (task.dueDate === undefined)  task.dueDate = new Date();
  const db = getDatabase();
  set(ref(db, 'todos/' + task.firebaseId), {
    ...task
  })
  .then(() => {

  })
  .catch((error) => {
    // The write failed...
  });

}


export const firebaseDbUpdate = async (tasks:any) => {
  console.log('clear db',tasks)
  const db = getDatabase();

  set(ref(db, 'todos'), {
    ...tasks
  })
  .then(() => {

  })
  .catch((error) => {
    // The write failed...
  });

}
