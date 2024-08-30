//its kinda protected container

import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Procted({children, authentication=true}) {

    const navigate = useNavigate()
    const[loader,setloader]= useState(true)
    const authstatus= useSelector(state=> state.auth.status)
//ifwe didn't took anything from user then authentication is TRUE forsure
    useEffect(()=>{
        //true && flase !== true
        //let authvalue = authstatus === true?true:false (2nd part)
        if(authentication && authstatus !== authentication){
            navigate("/login")
        }
        //false && true !== false
        else if(!authentication && authstatus !==authentication){
            navigate("/")
        }
    },
    [authstatus,navigate,authentication])

  return (
    <div>
      AuthLayout
    </div>
  )
}


