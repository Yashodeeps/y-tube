import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';

const WatchPage = () => {

  const [searchParams, {/**setSearchParams => dont need now*/}] = useSearchParams() //we cant use useparams because routing is not like /watch/id
  // console.log(searchParams.get("v")) // it gets the id from v

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch( closeMenu() )
  },[])


  return (
    <div className='flex flex-col'>
    <div className='px-5'>
      <iframe 
        width="1000" 
        height="500" 
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
      </iframe>
    </div>
    <div>
      <CommentContainer/>
    </div>

    </div>
  )
}

export default WatchPage;