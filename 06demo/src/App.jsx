import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usercontextprovider from './components/Usercontextprovider'
import ProfileInfo from './components1/ProfileInfo'
import Login from './components1/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Usercontextprovider>
      <ProfileInfo/>
      <Login/>
    </Usercontextprovider>
      </>
  )
}

export default App
