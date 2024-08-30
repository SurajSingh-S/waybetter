import React from 'react'
import {Logoutbtn,Container,Logo} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

  const authstatus= useSelector((state)=> state.auth.status)
  const navigate= useNavigate()

  const navitems=[
    {
      name :'Home',
      slug:"/",
      active:true
    },
    {
      name:"Login",
      slug:"/login",
      active:!authstatus,
    },
    {
      name:"Signup",
      slug:"/signup",
      active:!authstatus,
    },
    {
      name:"Add Posts",
      slug:"/allposts",
      active:authstatus,
    },
    {
      name:"add post",
      slug:"/addpost",
      active:authstatus,
    },
  ]

  return (
    <div className='py-3 shadow bg-gray-500'>
     
        <Container>
         <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
               <Logo width='70px'/>
            </Link>
          </div>
        <ul className='flex ml-auto'>
          {navitems.map((item)=>
          item.active?(
          <li key={item.name}>
            <button onclick={()=>navigate(item.slug)}
               className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            >{item.name}</button>
          </li>
        ):null
  
                    )}

          {authstatus && ( <li> <Logoutbtn/> </li> )}
  
        </ul>
        
        </nav>

        </Container>
      </div>
  )
}

export default Header
