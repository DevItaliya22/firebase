import {getAuth} from 'firebase/auth'
import {createUserWithEmailAndPassword } from "firebase/auth"
import {app} from "./firebase"

function Authentication() {

    const auth = getAuth(app);

    const handleSignUp = async()=>{
       const userCredentials=await createUserWithEmailAndPassword(auth,'dev@gmail.com',"dev@221103")
       console.log(userCredentials.user);
    }
  return (
    <div>
      <button onClick={handleSignUp}>Sign up</button>
    </div>
  )
}

export default Authentication
