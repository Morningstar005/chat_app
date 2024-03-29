import React, { useEffect, useRef } from 'react'
import Message from './Message'
import GetMessages from '../../hooks/GetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';


const Messages = () => {
  const {messages,loading} = GetMessages();
  const lastMessageRef = useRef();
  useListenMessages()
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"})

    },100)
  },[messages])
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length>0 &&messages.map((message)=>(
        // console.log("inside map,message",message)
      <div ref={lastMessageRef} key={message._id}>
         <Message message={message}/>
      </div>
      ))}
      {
        loading&& [...Array(3)].map((_,idx)=><MessageSkeleton key={idx}/>)
      }
      {
        !loading && messages.length===0 &&(
          <p className='text-center text-slate-800 '>Send a message to start the conversation</p>
        )
      }

    </div>
  )
}

export default Messages