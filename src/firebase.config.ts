import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDZF90VpYN_UMn_RgcmJFCJpcsszoa2MxM",
  authDomain: "test-planless.firebaseapp.com",
  projectId: "test-planless",
  storageBucket: "test-planless.appspot.com",
  databaseURL : "https://test-planless-default-rtdb.firebaseio.com/",
  messagingSenderId: "671565634388",
  appId: "1:671565634388:web:77c62be66628c6600ac6c1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")
export default firebase;
