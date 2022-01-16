import { Task } from "uiTypes";
import { todosRef } from "../firebase.config";
import { clearFirebaseData, setFirebaseData } from "./features/firebase/new-slice";
import { store } from "./stores/store";
import { getDatabase, ref, set, update } from "firebase/database";

export const  firebaseGet = () => {

   todosRef.on('value', (snapshot) => {

    let items:any = snapshot.val();
    let _items = [];

   if(items) {
      for (let item in items) {
        _items.push({
          id: item,
          title: items[item].title,
          firebaseId: item,
          dueDate: items[item].dueDate,
          position: items[item].position,
          done: items[item].done
        });
      }

   }
    const board = {
      columns: [
        {
          id: 1,
          title: "not completed",
          cards: _items.filter(e => e.done === false).sort(function (a, b) {
            return b.position - a.position;
          }),
        },
        {
          id: 2,
          title: "completed",
          cards: _items.filter(e => e.done === true).sort(function (a, b) {
            return b.position - a.position;
          }),
        }
      ]
    };

    store.dispatch(setFirebaseData(board));
  });
}

export const firebaseUpdate = async (task:Task) => {
  if (task.dueDate === undefined)  task.dueDate = new Date();
  todosRef.child(task.id as string).set(task).then(e => {
    store.dispatch(clearFirebaseData());
  })
}

export const firebaseSave = async (task:Task) => {
  todosRef.push(task).then(e => {
    store.dispatch(clearFirebaseData());
  });
}

export const firebaseDelete = async (task:Task) => {
  todosRef.child(task.id).remove().then(e => {
    store.dispatch(clearFirebaseData());
  })
}


export const firebaseDbUpdate = async (tasks:any) => {
  const db = getDatabase();

  set(ref(db, 'todos'), {
    ...tasks
  })
  .then(() => {
  })
  .catch((error) => {
  });

}
