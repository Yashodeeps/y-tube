import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import appSlice, { toggleMenu } from '../utils/appSlice'
import { Link } from 'react-router-dom'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'

const Header = () => {
    const [searchText, setSearchText] = useState("");
    const [searchSuggestions, setSearchSuggestions]= useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false)
    const searchCache = useSelector(store=> store.search);
    const dispatch = useDispatch()

    useEffect(()=>{
    
        const timer = setTimeout(()=> {

            if(searchCache[searchText]){
                setSearchSuggestions(searchCache[searchText])

            } else{
                getSearchSuggestios()
            }
        
        }, 200)

        return()=>{
            clearTimeout(timer);
        }
    }, [searchText])

    useEffect(() => {
        // Listen for scroll events and update showSuggestions accordingly
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowSuggestions(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuClick =()=>{
        dispatch(toggleMenu())
    }

    const getSearchSuggestios = async ()=>{
        const data = await fetch(YOUTUBE_SEARCH_API + searchText);
        const json = await data.json()
        setSearchSuggestions(json[1])
        dispatch(cacheResults({
            [searchText]: [json[1]]
        }))

    }

  return (
    <div className='grid grid-flow-col m-2 p-5'>
        <div className='flex col-span-1'>
            <img onClick={()=> handleMenuClick()} className='h-8 cursor-pointer' alt='hamburger-logo' src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png' />
            <img className='h-8 mx-2' alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png' />
        </div>

        <div className='col-span-10 flex justify-center'>
            <input 
            className='w-1/2 border p-2 border-gray-800 rounded-l-full' 
            type='text'
            value={searchText}
            onChange={(e)=> setSearchText(e.target.value)}
            onFocus={()=> setShowSuggestions(true)}
            onBlur={()=> setShowSuggestions(false)}
            />
            <button className='bg-gray-100  border border-gray-800 rounded-r-full px-2 '>Search</button>
            
        </div>

        {showSuggestions && (
            <div className="fixed bg-white py-2 px-2 w-[38rem] mx-[32rem] my-[3rem] shadow-lg rounded-lg border border-gray-100 flex flex-col justify-center">
            {
                (
                    <ul>
                        {
                            searchSuggestions.map((s)=> <li key={s}  className="flex flex-col py-2 px-3 shadow-sm hover:bg-gray-100">🔎 {s}</li>)
                        }
                    </ul>
                )
            }
        </div>
        )}

        

       

        <div className='col-span-1'>
            <img className='h-8' alt='user-icon' src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png'/>
        </div>

    </div>
  )
}

export default Header;