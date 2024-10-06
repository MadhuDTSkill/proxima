import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import { getData } from '../../../Functions/localStorage';
import Modal from './DeleteModal'; // Import the Modal component

const ChatItem = ({ chat, onDelete }) => {
  const nav = useNavigate();
  const { chat_id } = useParams(); // Get the current chat id from the URL
  const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  // Function to navigate to the specific chat
  const handleNavigate = () => {
    return nav(`/c/${chat.id}`);
  };

  const handleNewChat = () => {
    return nav(`/`);
  };

  const getNewChatTemp = () => {
    return getData('newChat');
  };

  const clearNewChatTemp = () => {
    localStorage.removeItem('newChat');
  };

  // Check if the chat is active
  const isActive = chat_id === chat.id;
  const isNewChat = chat.id === getNewChatTemp();

  // Function to handle delete confirmation
  const handleDelete = () => {
    setModalOpen(true); // Open the modal
  };

  const confirmDelete = () => {
    onDelete(chat.id); // Call the delete function passed as a prop
    setModalOpen(false); // Close the modal after confirmation
    handleNewChat()
  };

  return (
    <>
      <div
        className={`flex justify-between group items-center truncate py-2 px-2.5 rounded-lg cp ${
          isActive ? 'bg-main bg-opacity-20' : 'hover:bg-pink-100'
        }`}
        onClick={handleNavigate}
      >
        <span className='truncate text-black font-thin'>
          {isNewChat ? (
            <ReactTyped
              strings={[chat.name || 'New Chat']}
              typeSpeed={50}
              loop={false}
              showCursor={false}
              onComplete={clearNewChatTemp}
            />
          ) : (
            chat.name || 'New Chat'
          )}
        </span>
        <div
          className='group-hover:visible invisible cursor-pointer'
          onClick={handleDelete} // Trigger delete on click
        >
          <MdDelete className='text-xl text-gray-500' />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)} // Close modal without deleting
        onConfirm={confirmDelete} // Confirm deletion
      />
    </>
  );
};

export default ChatItem;
