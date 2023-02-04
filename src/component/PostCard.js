import React,{useState} from 'react'
import IMG from "../assets/img.jpg";
import mov from "../assets/mov.mp4";
import {AiFillHeart} from 'react-icons/ai';
import {IoMdShareAlt} from 'react-icons/io';
import {MdInsertComment} from 'react-icons/md'

const PostCard = () => {
    const [liked , setLiked] = useState(false)

  return (
    <>
        <div className='flex items-start justify-between w-[500px]  h-screen overflow-y-scroll'>
       <div className=" w-[350px] relative flex flex-col items-center justify-center" >
        <div className="flex m-5">
            <img src={IMG} className="w-[40px] h-[40px] rounded-full" alt="" />
            <div className="grid mx-1">
                <div className="flex items-center">
                <h4 className='text-sm'>Carina Catherine</h4>
                <span className='mx-2 text-xs text-gray-300'>ben curl</span>
                </div>
                <blockquote className='text-xs'>
                    Lorem ipsum dolor sit amet consectetur m.
                </blockquote>
            </div>
        </div>
            {/* VIDEO  CONTAINER */}
            <video className="h-[400px] bg-black w-[250px] rounded"   controls>
            <source src={mov} type="video/mp4"/>
          </video>

           {/* SOCIAL BUTTONS */}
        <div className="absolute right-0 top-[70%] flex flex-col">
            <div className="flex justify-center items-center mb-4 p-2 bg-gray-200 rounded-full cursor-pointer" onClick={()=>{setLiked(!liked)}}>
               {liked === true ?  <AiFillHeart className='text-red-600'/> :  <AiFillHeart/>}
            </div>
            <div className="flex justify-center items-center mb-4 p-2 bg-gray-200 rounded-full cursor-pointer">
                <MdInsertComment/>
            </div>
            <div className="flex justify-center items-center mb-4 p-2 bg-gray-200 rounded-full cursor-pointer">
                <IoMdShareAlt/>
            </div>
        </div>
        </div>

        <button className=' bg-red-500 text-white w-[100px] cursor-pointer rounded'>Follow</button>
       
       </div>
    </>
  )
}

export default PostCard