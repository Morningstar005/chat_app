import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end '>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://avatar.iran.liara.run/public/boy?username=$%7BuserName%7D" alt="avatar" />
            </div>
        </div>
        <div>
            <div className={`chat-bubble text-white bg-blue-500`}>Hi! what is upp?</div>
            <div className={`chat-footer opacity-50 text-sm text-slate-900 flex gap-1 items-center`}>01:45</div>
        </div>
    </div>
  )
}

export default Message