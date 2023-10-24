import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenu = useSelector((store)=> store.app.isMenu)

  //Early Return pattern
  if(!isMenu) return null;

  return (

    <div className='m-2 p-2 w-48  shadow-lg'>
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscriptions</li>
        </ul>

        <h1 className='font-bold '>Explore</h1>
        <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
        </ul>
    </div>
  )
}

export default Sidebar;