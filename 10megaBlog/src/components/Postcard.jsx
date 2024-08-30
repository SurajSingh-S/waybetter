import React from 'react'
import appwritesevice from "../appwrite/configggg.js"
import { Link } from 'react-router-dom'

function Postcard({$id,title,featuredimage}) {
  return (
   <Link to={`/post/${$id} `}>
    <div className='bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
            <img src={appwritesevice.getfilepreviwe(featuredimage)} 
            alt="{title}" className='rounded-xl'/>
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
    </div>
   </Link>
  )
}

export default Postcard
