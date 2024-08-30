import React, { useContext, useState } from 'react'
import Usercontext from '../components/Usercontext'

function Login() {

    const [username,setusername]=useState('')
    const[password,setpassword] = useState('')

    const {setuser}= useContext(Usercontext)

    

    const handlesubmit=(e)=>{
        e.preventDefault()
        setuser({username,password})
    }

  return (
    <div>
      <h2>Login</h2>
      <input 
      type='text'
      value={username}
      onClick={(e)=> setusername( e.target.value)}
      placeholder='enter your username'
      />

      <input
      type='text'
      value={password}
      onClick={(e)=>setpassword(e.target.value)}
      placeholder='enter your password here'/>


      <button onClick={handlesubmit}>click here</button>
    </div>
  )
}

export default Login
