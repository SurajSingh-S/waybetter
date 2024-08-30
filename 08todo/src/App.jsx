import { useState,useEffect } from 'react'
import {Todoprovider} from "./contexts"
import './App.css'
import { Toditem, Todoform } from './components'

function App() {
  const[todos,settodos]= useState([])

    const addtodo=(todo)=>{
      settodos(prev=>[{id:Date.now(),...todo},...prev])       //purani values array mei present hongi vo nhi chahiye but unki state chahiye isliye ye kiya
    }

    const updatetodo=(id,todo)=>{
      settodos((prev)=>prev.map((prevtodo)=>(prevtodo.id === id? todo : prevtodo)))   // map used for looping to identify element i.e {prevtodo}
    }

    const deletetodo=(id)=>{
      settodos((prev)=>prev.filter((prevtodo)=>prevtodo.id !== id))
    }

    const tooglecomplete=(id)=>{
      settodos((prev)=>prev.map((prevtodo)=> prevtodo.id === id ? {...prevtodo,completed:!prevtodo.completed} :prevtodo ))        //{ ... spread operator use kiya kyuki baki sari values ko same ezs hi rkhna h  }
    }

    useEffect(()=>{
      const todos= JSON.parse(localStorage.getItem("todos"))

      if(todos && todos.length > 0 ){
        settodos(todos) 
      }
    },[])

    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))     //local storage mei dalne ho
    },[todos])




  return (
    <Todoprovider value={{todos,addtodo,updatetodo,deletetodo,tooglecomplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <Todoform/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        
                        {todos.map((todo)=>(
                         <div key={todo.id}
                         className='w-full'
                         > 
                          <Toditem todo={todo}/>
                          </div>

                        ))}


                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
