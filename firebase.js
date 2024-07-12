
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCbM5sNzF-Z12F9NgFsYrv9E4ld3lGIUzc",
  authDomain: "react-notes-1e4ad.firebaseapp.com",
  projectId: "react-notes-1e4ad",
  storageBucket: "react-notes-1e4ad.appspot.com",
  messagingSenderId: "677497655092",
  appId: "1:677497655092:web:8d3fa992f04192e5af1f61"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
