import React from 'react'

const Menus = ({Icon,name}) => {
  return (
    <div className="flex justify-center cursor-pointer px-3 text-red-500 mb-4">
    <Icon className='text-2xl'/>
    <h4 className='mx-2 font-bold'>{name}</h4>
    </div>
  )
}

export default Menus