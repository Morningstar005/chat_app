import React from 'react'
import useConversation from '../../Zustannd/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation,lastIdx}) => {
    const {selectedConversation,setSelectedConversation} = useConversation();
    
    const isSelected = selectedConversation?._id ===conversation._id;
    const {onlineUsers} = useSocketContext();
    // console.log("onlineUsers",onlineUsers)
  const isOnline = onlineUsers.includes(conversation._id)
  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-slate-500 rounded py-1 p-2 cursor-pointer ${isSelected?"bg-slate-500":""}`}
    onClick={()=>setSelectedConversation(conversation)}>
        <div className={`avatar ${isOnline?"online":""}`}>
            <div className='w-12 rounded-full'>
                <img src={conversation.profilePic} alt="user avatar" />
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='text-slate-950 font-bold' >{conversation.fullName}</p>
                <span className='text-xl'>🎃</span>
            </div>
        </div>
    </div>
    {!lastIdx && <div className='divider bg to-white my-0 py-0 h-1'/>}
    </>
  )
}

export default Conversation