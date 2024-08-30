import { useContext,createContext } from "react";

export const Todocontext= createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false,
        },
    ],
    addtodo:()=>{},
    updatetodo:(id,todo)=>{},
    deletetodo:(id)=>{},
    tooglecomplete:(id)=>{}

})


export const Usetodo =()=>{
    return useContext(Todocontext)
}
export const Todoprovider= Todocontext.Provider