import React from 'react'
import Usercontext from './Usercontext'
import { useState } from 'react';

const Usercontextprovider=({children})=>{    //children->generic name h, mtlb jo aa rha h use age pass krdo like div and all

    const [user,setuser]= useState(null);
    
    return (
        <>
        <Usercontext.Provider value={{user, setuser}}>       
                                                       {/* // user or setuser ka access de diya */}
           {children}
        </Usercontext.Provider>
        </>
    )
}

export default Usercontextprovider
