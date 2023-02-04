import React from 'react'
import {FaTiktok} from 'react-icons/fa';
import {CiSearch} from 'react-icons/ci'
import {AiOutlinePlus} from 'react-icons/ai';
import {TbBrandTelegram} from 'react-icons/tb';
import {BiMessageAltMinus} from 'react-icons/bi';
import {CiUser} from 'react-icons/ci';
const NavBar = () => {
  return (
    <div className='w-screen  h-[50px] border-b-gray-100 shadow'>
        <div className="w-screen mx-auto flex md:justify-evenly items-center h-[50px] justify-between">
            {/* LOGO HERE */}
            <div className="flex justify-center items-center ml-2">
                <FaTiktok className='text-3xl'/>
                <h4 className='font-bold text-2xl'>TiKTok</h4>
            </div>
            {/* search bar */}
            <div className="hidden md:flex justify-evenly items-center w-[400px] bg-gray-100 rounded-full p-2">
                <input type="text" placeholder='search accounts and videos' className='border-none outline-none font-light  bg-gray-100 w-[80%]'/>
                <div className="w-[2px] h-full bg-gray-300">.</div>
                <CiSearch className='text-2xl'/>
            </div>
            {/* Icons */}
            <div className="flex justify-center items-center mr-2">
                {/* button */}
                <div className="flex justify-center items-center shadow p-1 cursor-pointer border-gray-300 hover:bg-gray-200">
                    <AiOutlinePlus/>
                   <span className='mx-3'>upload</span>
                </div>
                <TbBrandTelegram className='cursor-pointer text-2xl ml-3' title="messages"/>
                <BiMessageAltMinus className='cursor-pointer text-2xl ml-3' title="inbox"/>

                {/* PROFILE */}
                <div className="w-[30px] h-[30px] rounded-full bg-white ml-3 flex justify-center items-center cursor-pointer">
                        <CiUser/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar