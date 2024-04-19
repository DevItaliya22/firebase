import Authentication from "./components/Authentication"
import AuthUsingGoogleEtc from "./components/AuthUsingGoogleEtc"
import IsLoggedIn from "./components/IsLoggedIn"
import SignIn from "./components/SignIn"
import Database_Context from './components/Database_Context'
import FireStore from "./components/FireStore"
function App() {
  
  return (
    <>
      <Authentication></Authentication>
      <AuthUsingGoogleEtc></AuthUsingGoogleEtc>
      <IsLoggedIn></IsLoggedIn>
      <SignIn></SignIn>
      <Database_Context></Database_Context>
      <FireStore></FireStore>
    </>
  )
}

export default App
