import React from 'react'
import {AiFillHome} from 'react-icons/ai';
import {FiUsers} from 'react-icons/fi';
import {RiLiveLine} from 'react-icons/ri';
import UserCard from './UserCard';
const Sidebar = () => {
  return (
    <div className='flex flex-col  h-screen overflow-y-auto'>
    <div className="flex  cursor-pointer px-3 text-red-500 mb-6">
    <AiFillHome className='text-2xl'/>
    <h4 className='mx-4 font-bold text-center'>For You</h4>
    </div>

    <div className="flex cursor-pointer px-3 mb-6">
    <FiUsers className='text-2xl'/>
    <h4 className='mx-4 font-bold'>Followers</h4>
    </div>

    <div className="flex  cursor-pointer px-3 mb-6">
    <RiLiveLine className='text-2xl'/>
    <h4 className='mx-4 font-bold text-center'>Live</h4>
    </div>
    <div className="w-4/5 h-[1px] bg-gray-200"></div>

    {/* SUGGESTED ACCOUNTS */}
    <div className="flex flex-col px-3 mb-3">
    <h6 className='text-sm font-light'>Suggested accounts</h6>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <span className='text-red-600 font-bold cursor-pointer'>see all</span>
    </div>
    <div className="w-4/5 h-[1px] bg-gray-200"></div>
    <div className="flex flex-col px-3 mb-3">
    <h6 className='text-sm font-light'>Following</h6>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    </div>


    </div>
  )
}

export default Sidebar