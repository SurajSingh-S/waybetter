import React from 'react'
import { useParams } from 'react-router-dom'
function Operator() {
   const {operatorid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>Operator: {operatorid}</div>
  )
}
export default Operator
