import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// TODO: Make a .env file and put this in there 
const firebaseConfig = {
  apiKey: "AIzaSyA233CyPDDc7bmjmXAIgzD-DYyVVSIgjBs",
  authDomain: "mobischool-389d8.firebaseapp.com",
  projectId: "mobischool-389d8",
  storageBucket: "mobischool-389d8.appspot.com",
  messagingSenderId: "1070871748519",
  appId: "1:1070871748519:web:9da770fc315aa014eaa082",
  measurementId: "G-0MBX3J8D44"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore()
const storage = firebase.storage()

export { auth, firestore, storage };