import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/firebase-storage"
const app = firebase.initializeApp({
  apiKey: "AIzaSyCcah9ywt-A45pV485m6NqpvB_R2vPG51w",
  authDomain: "socialjs-a9db4.firebaseapp.com",
  projectId: "socialjs-a9db4",
  storageBucket: "socialjs-a9db4.appspot.com",
  messagingSenderId: "370277424806",
  appId: "1:370277424806:web:b1c00128edcecbf927de67"
})
export const auth = app.auth();
export const storage = app.storage();
export const firestore = app.firestore();
export const db={
  leave:firestore.collection('leaveapplication'),
  contact:firestore.collection('contact'),
  users:firestore.collection('users'),
  InRegister:firestore.collection('InRegister'),
  OutRegister:firestore.collection('OutRegister'),
  visitor:firestore.collection('visitor'),
  complaints:firestore.collection('complaints'),
  formatedDoc:doc=>{
    return{id:doc.id,...doc.data()}
  },
  getCurrentTimeStamp:firebase.firestore.FieldValue.serverTimestamp,
}
export default app;

//firebase production mode
/*rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
} */