import { useState,useEffect } from 'react'
import authservice from './Appwrite/auth';
import './App.css'
import { useDispatch } from 'react-redux';
import { login,logout } from './store/authslice';
import { Header } from './components';
import {Footer} from './components';
import { Outlet } from 'react-router-dom';

function App() {

  const[loading,setloading]= useState(true);
  const dispatch = useDispatch()

  useEffect(()=>{
    authservice.getcurrentuser()
    .then((userdata)=>{
      if(userdata){
        dispatch(login({userdata}))
      }
      else(logout())
    })
    .finally(()=>{setloading(false)})
  },[])

  return !loading ? (
    <div className='min-h-screen flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer/>
        
      </div>
    </div>
  )  : (null)  
}

export default App
