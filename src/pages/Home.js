import React from 'react'
import NavBar from '../component/NavBar';
import Sidebar from '../component/Sidebar';
import FeedsContainer from './FeedsContainer';
import Empty from '../component/Empty';
const Home = () => {
  return (
   <>
    <NavBar />
    <div className="w-screen h-screen  flex justify-around mt-10">
        <Sidebar/>
        <FeedsContainer/>
        <Empty/>
        <Empty/>
        
        
    </div>
   </>
  )
}

export default Home