import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route,  RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contacts/Contacts.jsx'
import Operator from './components/operator/Operator.jsx'
import Github from './components/github/Github.jsx'



// const router= createBrowserRouter([
//   {
//     path:'/', element:<Layout/>,
//     //adding children
//     children:[
//       {
//         path:"",element:<Home/>
//       },
//       {
//         path:"about",element:<About/>
//       },
//       {
//         path:"contacts",element:<Contact/>}

//     ]

//   }
// ] )

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='/home' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contacts' element={<Contact/>}/>
       <Route path='operator/:operatorid' element={<Operator/>}/>
       <Route path='github' element={<Github/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)
