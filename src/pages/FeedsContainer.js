import React from 'react'
import PostCard from '../component/PostCard'


const FeedsContainer = () => {
  return (
    <div className=' w-[500px] h-screen overflow-y-scroll'>
       <PostCard/>
       <PostCard/>
       <PostCard/>
       <PostCard/>
       <PostCard/>
    </div>
  )
}

export default FeedsContainer