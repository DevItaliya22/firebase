import React, { useState } from 'react'
import { useFirebase } from '../context/firebase-context'

function Database_Context() 
{
  const firebase = useFirebase();
  const [data,setData] = useState();

  const handleDataBasePush=()=>{
    console.log(firebase);
    firebase.insertDataInFirebaseDB('users/data',{data}) // how to use context ,thats it //btw users.data is ref that will be seen agal
  }

  return (
    <div>
      <input type="text" onChange={e=>setData(e.target.value)} value={data}/>
      <button onClick={handleDataBasePush}>put data</button>
    </div>
  )
}

export default Database_Context
