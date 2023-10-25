import React from 'react'

const VideoCard = ({info}) => {
  console.log(info);
  const {snippet, statistics} = info;
  const {channelTitle, thumbnails, title} = snippet;
  const {viewCount} = statistics;


  return (
    <div className='w-96 m-2 p-2'>
      <img className='rounded-xl' src={thumbnails.medium.url} />
      <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
     
    </div>
  )
}

export default VideoCard;