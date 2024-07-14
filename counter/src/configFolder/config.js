// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQCq7KbkMquadsAMFO21BbHfJguMUe87o",
  authDomain: "todo-app-aa57f.firebaseapp.com",
  projectId: "todo-app-aa57f",
  storageBucket: "todo-app-aa57f.appspot.com",
  messagingSenderId: "309560130553",
  appId: "1:309560130553:web:d72461f79f74af83ba9b28",
  measurementId: "G-C3MB9PRPDE"
};
hey

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)