import { createSlice,nanoid } from "@reduxjs/toolkit";
// nanoid -> it is a method to generate unique id's

const initialstate={
    todos:[{id:1,text:"hello"}]
}

export const todoSlice= createSlice({
    name:'todo',
    initialstate,
    reducers:{                         // reducers consist of properties
    
        addtodo: (state,action)=>{
            const todo ={
                id:nanoid(), text:action.payload   //actions is the payload, which carries data to be processed by reducers.
            }
            state.todos.push(todo)
        },  
        // state will provide the access of initialstate
        //action provides whatever data is passing in object
        removetodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
        },   

        // deletetodo:(state,action)=>{
        //      state.todo= state.todos.map((todo)=> todo.id === action.payload.id? {...todo,...action.payload.updatedtodo}: todo)
        // }
    }                 
})


export const {addtodo, removetodo}= todoSlice.actions         // sare individual methods export krenge 

export default todoSlice.reducer