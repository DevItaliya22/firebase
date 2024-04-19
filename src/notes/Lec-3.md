<!-- correct way of using firebase with context and all -->

step 1 )Make boiler plate and wrap app with provider

import { createContext } from "react";

const FirebaseContext = createContext(null);

export const FirebaseProvider = (props) =>{
    return(
        <FirebaseContext.Provider>
            {props.children}
        </FirebaseContext.Provider>
    )
}
 and then wrap with FirebaseProvider

 step 2)