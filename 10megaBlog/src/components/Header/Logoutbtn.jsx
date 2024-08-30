import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../Appwrite/auth'
import { logout } from '../../store/authslice'

function Logoutbtn() {
    const dispatch = useDispatch()
    
    const logouthandler =()=>{
        authservice.logout().then(()=>{
            dispatch(logout())
        })
    }

  return (
    <button className='inline-block px-6 py-2 duratio-200 hover:bg-blue-100 rounded-full'
    >Logout</button>
  )
}

export default Logoutbtn
