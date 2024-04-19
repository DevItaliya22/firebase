import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

function Authentication() {
  const auth = getAuth(app);

  const handleSignUp = async () => {
    //this is create means u cannot use same email twice
    //here use try catch to see if user is already logged in
   
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        "dev2@gmail.com",
        "dev@221103"
      );
      console.log(userCredentials.user);
    } catch (error) {
      console.log(error.message); // Firebase: Error (auth/email-already-in-use). if already using
    }
  };
  return (
    <div>
      <button onClick={handleSignUp}>Sign up</button>
    </div>
  );
}

export default Authentication;
