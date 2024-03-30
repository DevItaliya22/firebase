
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCLLqICT9C3dtWAL3PuSDqtmMr-dL721ns",
  authDomain: "test-project-1-e15f6.firebaseapp.com",
  projectId: "test-project-1-e15f6",
  storageBucket: "test-project-1-e15f6.appspot.com",
  messagingSenderId: "78206000617",
  appId: "1:78206000617:web:1bb3d6f90ba543bb09bf78",
  measurementId: "G-6K137VQFXR",
  databaseURL : "https://test-project-1-e15f6-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);