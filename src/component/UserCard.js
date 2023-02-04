import React from 'react'
import Image from  '../assets/img1.jpeg'

const UserCard = () => {
  return (
    <div className='flex my-1 cursor-pointer'>
    <img src={Image} alt="" className='w-[30px] h-[30px] rounded-full '/>
    <div className="hidden md:grid mx-3">
        <h4 className='text-sm'>James Kane</h4>
        <span className='text-xs text-gray-300'>Youtube joint</span>
    </div>
    </div>
  )
}

export default UserCard