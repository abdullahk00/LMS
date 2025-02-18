import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, push } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyCsuRX2jmpldHQrr2MiR6313NH1htI9dbA",
  authDomain: "react-nav-project.firebaseapp.com",
  projectId: "react-nav-project",
  storageBucket: "react-nav-project.firebasestorage.app",
  messagingSenderId: "231142651666",
  appId: "1:231142651666:web:2b6df95bdab6bf370625cb",
  measurementId: "G-10M729SPQ3",
  databaseURL: "https://react-nav-project-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
