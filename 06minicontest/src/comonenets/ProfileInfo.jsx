
import React,{useContext} from 'react'
import Usercontext from '../context/Usercontext'

function ProfileInfo() {
    
    const {user}=useContext(Usercontext)

  //conditional return

  if(!user) return <div>Please login</div>

  return <div>Welcome {user.username}</div>

}

export default ProfileInfo

