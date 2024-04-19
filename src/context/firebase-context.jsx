import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase ,set,ref} from "firebase/database";

const FirebaseContext = createContext(null);
export const useFirebase = () =>useContext(FirebaseContext);

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

const FirebaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(FirebaseApp);
const FirebaseDatabase = getDatabase(FirebaseApp);

export const FirebaseProvider = (props) =>{

    //when u add firebase app and auth , then just make functions and put them in provider , so they can be accesed from anywhere

    const signUpUserWithEmailAndPassword = async(email,password)=>{
        const userCredential =await createUserWithEmailAndPassword(FirebaseAuth,email,password)
        return userCredential;
    }
    const insertDataInFirebaseDB = (key,data)=> set(ref(FirebaseDatabase,key) , data)


    return(
        <FirebaseContext.Provider value={{signUpUserWithEmailAndPassword,insertDataInFirebaseDB}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}

// now question is how to use it 