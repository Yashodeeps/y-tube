import React from 'react'
import { useDispatch } from 'react-redux'
import appSlice, { toggleMenu } from '../utils/appSlice'

const Header = () => {

    const dispatch = useDispatch()

    const handleMenuClick =()=>{
        dispatch(toggleMenu())
    }

  return (
    <div className='grid grid-flow-col m-2 p-5'>
        <div className='flex col-span-1'>
            <img onClick={()=> handleMenuClick()} className='h-8 cursor-pointer' alt='hamburger-logo' src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png' />
            <img className='h-8 mx-2' alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png' />
        </div>

        <div className='col-span-10 flex justify-center'>
            <input className='w-1/2 border p-2 border-gray-800 rounded-l-full' type='text'/>
            <button className='bg-gray-100  border border-gray-800 rounded-r-full px-2 '>Search</button>
        </div>

        <div className='col-span-1'>
            <img className='h-8' alt='user-icon' src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png'/>
        </div>

    </div>
  )
}

export default Header;