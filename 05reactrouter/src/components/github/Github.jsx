import React, { useState } from 'react'
import { useEffect } from 'react'


function Github() {

    const [data,setdata]= useState([])

    useEffect(()=>{
        fetch('https://github.com/SurajSingh-S')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setdata(data);
        })

    },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'> 
    Git follower: {data.followers}
    <img src ={data.avatar_url} alt="Git picture" width={300}/> </div>
  )
}

export default Github
