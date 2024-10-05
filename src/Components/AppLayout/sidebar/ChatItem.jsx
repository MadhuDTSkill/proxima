import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'
import { ReactTyped } from 'react-typed';
import { getData } from '../../../Functions/localStorage';


const ChatItem = ({ chat }) => {
  const nav = useNavigate()
  const { chat_id } = useParams() // Get the current chat id from the URL

  // Function to navigate to the specific chat
  const handleNavigate = () => {
    return nav(`/c/${chat.id}`)
  }

  const getNewChatTemp = () => {
    return getData('newChat')
  }

  const clearNewChatTemp = () => {
    localStorage.removeItem('newChat')
  }

  // Check if the chat is active
  const isActive = chat_id === chat.id
  const isNewChat = chat.id === getNewChatTemp()

  return (
    <div
      className={`flex justify-between group items-center truncate py-2 px-2.5 rounded-lg cp ${
        isActive ? 'bg-main bg-opacity-20' : 'hover:bg-pink-100'
      }`} 
      onClick={handleNavigate}
    >
      <span className='truncate text-black font-thin'>
        {
          isNewChat ?
          <ReactTyped
            strings={[chat.name || 'New Chat']}
            typeSpeed={50}
            loop = {false}
            showCursor={false}
            onComplete={clearNewChatTemp}
          />
          :
          chat.name || 'New Chat'
        }
      </span>
      <div className='group-hover:visible invisible'>
        <MdDelete className='text-xl text-gray-500' />
      </div>
    </div>
  )
}

export default ChatItem
