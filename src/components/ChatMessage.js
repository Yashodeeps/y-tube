import React from 'react';

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center'>
        <img className='h-8' alt='user-icon' src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png'/>
          <span className='px-2 py-4 font-bold'>{name} </span>
          <span>{message} </span>
    </div>
  )
}

export default ChatMessage;
