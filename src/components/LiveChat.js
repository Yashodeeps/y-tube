import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { getRandomName, getRandomText } from '../utils/helper';

const LiveChat = () => {

    const [chat, setChat]= useState("")
    const dispatch = useDispatch();

    const ChatMessages = useSelector(store => store.chat.messages )
 
    useEffect(()=>{
        const i = setInterval(()=>{
            //API Polling
            console.log("poll");

            dispatch(
                addMessage({
                    name: getRandomName(),
                    message: getRandomText(20)
                })
            )
        }, 1500)

        return ()=> clearInterval(i);
    }, [])

  return (

    <>
    <div className='w-full h-[500px] mx-8 p-5 rounded-t-2xl bg-gray-200 overflow-y-scroll flex flex-col-reverse'>

        {
            ChatMessages.map((c, index)=> 
                <ChatMessage 
                    key={index}  //Dont use index as key, there will always be an id assosiated with every chat message
                    name= {c.name}
                    message={c.message} 
                    />)
        }       
    </div>

    <form 
        onSubmit={
            (e)=> {
                e.preventDefault();
                dispatch(
                    addMessage({
                        name: "Yashodeep",
                        message: chat
                    })
                );
                setChat("");
            }
        } 
        className='w-full mx-8 p-2 border border-t-black bg-gray-200 rounded-b-2xl'>
        <input 
            className='border border-b-black m-2  py-1 px-2 w-60'
            type='text'
            value={chat}
            placeholder='join the chat'
            onChange={(e)=> setChat(e.target.value)}
            />
        <button className='px-4 py-1 bg-blue-600 text-white rounded-lg text-center'>send</button>
    </form>

</>
  )
}

export default LiveChat;