
import './App.css'
import LoginInfo from './comonenets/LoginInfo'
import ProfileInfo from './comonenets/ProfileInfo'
import Usercontext from './context/Usercontext'
import Usercontextprovider from './context/Usercontextprovider'

function App() {

  return (
    <Usercontextprovider >
      <h1>react with me </h1>
      <LoginInfo/>
      <ProfileInfo/>

    </Usercontextprovider>
  )
}

export default App
