import React, { useState } from 'react';
import { MdSaveAlt, MdContentCopy, MdRefresh  } from "react-icons/md";

const MessageMenu = ({ message }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [copyIcon, setCopyIcon] = useState(<MdContentCopy size={17} className='text-main hover:bg-main hover:text-white hover:p-1 rounded' />);

  // Menu items array
  const menuItems = [
    {
      icon: copyIcon,
      title: 'Copy',
      action: () => {
        navigator.clipboard.writeText(message)
          .then(() => {
            // Change the icon to 'Copied' state
            setCopyIcon(<span className='text-main'>Copied!</span>);
            // Reset the icon after 2 seconds
            setTimeout(() => setCopyIcon(<MdContentCopy size={17} className='text-main hover:bg-main hover:text-white hover:p-1 rounded' />), 3000);
          })
          .catch((err) => console.error('Failed to copy: ', err));
      }
    },
    {
      icon: <MdRefresh size={20} className='text-main hover:bg-main hover:text-white hover:p-1 rounded' />,
      title: 'Refresh',
      action: () => {
        // Implement refresh logic here
        console.log('Refresh response');
      }
    },
    {
      icon: <MdSaveAlt size={20} className='text-main hover:bg-main hover:text-white hover:p-1 rounded' />,
      title: 'Save as Markdown',
      action: () => {
        const blob = new Blob([message], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'message.md'; // Filename
        a.click();
        URL.revokeObjectURL(url); // Clean up URL.createObjectURL
      }
    }
  ];

  return (
    <div className='flex space-x-4'>
      {menuItems.map((item, index) => (
        <div 
          key={index} 
          className='flex items-center cursor-pointer relative' 
          onMouseEnter={() => setHoveredIndex(index)} 
          onMouseLeave={() => setHoveredIndex(null)} 
          onClick={item.action}
        >
          {index === 0 ? item.icon : item.icon} {/* Displaying the copy icon or the 'Copied' text */}
          {hoveredIndex === index && (
            <span className='absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded p-1 mt-2'>
              {item.title}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default MessageMenu;
