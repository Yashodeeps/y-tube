import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard.js';
import { YOUTUBE_VIDEO_API } from '../utils/constants.js';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const[video, setVideo] = useState([]);

  useEffect(()=> {
    getVideos();
  }, [])

  const getVideos = async() => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideo(json.items);
  }

  if(!video) return null;

  return ( 
    <div className='flex flex-wrap'>
      {
      video.map((video)=> 
      <Link to={"/watch?v=" + video.id} ><VideoCard info={video} key={video.id} /></Link>
      )
      }   
    </div>
  )
}

export default VideoContainer;