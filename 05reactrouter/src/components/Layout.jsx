import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
     <Outlet/>
    <Footer/>       
    </>
               //header or footer chnage nhi hoga uske andr ka change hoga is liye outlet liya 
  )
}

export default Layout
