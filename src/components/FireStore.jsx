import React from 'react'
import { getFirestore ,collection,addDoc,getDocs,doc,getDoc} from 'firebase/firestore'
import { app } from './firebase'


function FireStore() 
{
    const firestore = getFirestore(app);

    const handle = async() =>{
        try {
            const docRef = await addDoc(collection(firestore, "users"), {
              first: "Ada",
              last: "Lovelace",
              born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    //for getting all data
    const getData = async()=>{
      try {
        const data = await getDocs(collection(firestore, "users"));
        data.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      } catch (error) {
        console.log(error);
      }
    }
    //for getting single data 
    const docRef = doc(firestore,"users","310J6xXOojB3eG9G8H26") // first put then database instnce , then then collection name,then which id data u want
    const getDataSingle = async()=>{
      const snap = await getDoc(docRef)
      console.log(snap.data());
    }
    return (
        <div>
            <button onClick={handle}>firestore data send</button>
            <button onClick={getData}>get all data from firstore</button>
            <button onClick={getDataSingle}>get single item dta</button>
        </div>
    )
}

export default FireStore
