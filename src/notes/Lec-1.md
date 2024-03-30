<!-- here we will make account and stuff

1.Then the copied code from overview section/web button and after naming

FIREBASE.JS FILE --> 

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    <!-- this ALL data will change as per the project ofc -->
  apiKey: "AIzaSyCLLqICT9C3dtWAL3PuSDqtmMr-dL721ns",
  authDomain: "test-project-1-e15f6.firebaseapp.com",
  projectId: "test-project-1-e15f6",
  storageBucket: "test-project-1-e15f6.appspot.com",
  messagingSenderId: "78206000617",
  appId: "1:78206000617:web:1bb3d6f90ba543bb09bf78",
  measurementId: "G-6K137VQFXR",

  <!-- databaseURL will change according to real-time database url thing from build section there -->
  databaseURL : "https://test-project-1-e15f6-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);

<!-- this is all we want in this file -->

<!-- APP.JSX FILE --> 

import { useState } from 'react'
import {getDatabase,set,ref} from "firebase/database"
import { app } from './firebase'

function App() {
  const [count, setCount] = useState(0)

  const db=getDatabase(app);

  const putData = ()=>{
    <!-- here set means to put data in database and ref means the refrence + the folder type thing
    means users -> dev -> data  -->
    set( ref(db, 'users/dev') ,
        {
        id:1,
        name:"Dev"
    })
    console.log("done");
  }
  return (
    <>
      <button onClick={putData}>hehe</button>
    </>
  )
}

export default App

<!-- FOR CHECKING THAT IT IS ACTUALLY WORKING  -->