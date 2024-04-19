import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./firebase";

function IsLoggedIn() {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); //this means call the above fnx
  }, []);

  if (user) {
    return (
      <>
        <h1>Hello {user.email}</h1>
        <button onClick={() => signOut(auth)}>Logout</button>
      </>
    );
  } else {
    return (
      <div>
        <h1>Not logged in</h1>
      </div>
    );
  }
}

export default IsLoggedIn;
