import React, { useState } from 'react'
import {getAuth,signInWithEmailAndPassword} from'firebase/auth'
import {app} from './firebase'


function SignIn() 
{
    const auth = getAuth(app);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSignIn = async() =>{
        
        try {
            const userCredential =  await signInWithEmailAndPassword(auth,"dev2@gmail.com","dev@221103");
        const user = userCredential.user;
        console.log(user);
        } catch (error) {
            console.log(error.message); //Firebase: Error (auth/invalid-credential). gives this if not signup
        }
    }
    

    return (
     
        <div>
            <button onClick={handleSignIn}>Sign in</button>
        </div>
        
    )
}

export default SignIn


// /.official code 

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });