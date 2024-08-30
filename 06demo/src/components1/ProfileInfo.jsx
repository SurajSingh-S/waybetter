import React, { useContext } from 'react'
import Usercontext from '../components/Usercontext'

function ProfileInfo() {

    const {user}= useContext(Usercontext)

  
     if(!user) return <div> enter </div>
  
     return <div> {user.username}</div>
}

export default ProfileInfo
