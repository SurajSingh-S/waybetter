import {createContext, useContext} from "react";

export const Themecontext= createContext({
    thememode:"",
    lighttheme:()=>{},
    darktheme:()=>{},
})

export const Themeprovideer= Themecontext.Provider

export default function usetheme(){
    return useContext(Themecontext);
}