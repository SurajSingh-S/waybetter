import React from 'react'
import { useState } from 'react';
import { Usetodo } from '../contexts';

function Todoform() {

    const[todo,settodo]= useState(" ")

    const {addtodo}= Usetodo()

    const add= (e)=>{
        e.preventDefault()

        if(!todo) return
        addtodo({todo,completed:false}) 
        settodo("")       //{}-> kyu use kiya kyuki hmne app.jsx mei object spread kiya h date.now se isliye 
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 "
                value={todo}
                onChange={(e)=> settodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default Todoform
