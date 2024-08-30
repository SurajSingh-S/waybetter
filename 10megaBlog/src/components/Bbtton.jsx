import React from 'react'

function Bbtton({
    children,
    type='button',
    bgcolor='bg-blue-600',
    textcolor='text-white',
    classname='',
    ...props

}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgcolor} ${textcolor} ${classname}`}>
        {children}
    </button>
  )
}

export default Bbtton
