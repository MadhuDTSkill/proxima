import React, { useState, useRef, useEffect } from 'react';
import { FiSettings, FiLogOut, FiChevronDown } from 'react-icons/fi';

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle clicking outside of the menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Profile Icon (Trigger) */}
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-main cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        M
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-2xl shadow-lg bg-white border z-10">
          <ul className="p-3">
            {/* Settings Option */}
            <li
              className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                console.log('Navigate to settings');
                setIsOpen(false); // Close menu on click
              }}
            >
              <FiSettings className="mr-2" />
              <span>Settings</span>
            </li>

            {/* Logout Option */}
            <li
              className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                console.log('Logout');
                setIsOpen(false); // Close menu on click
              }}
            >
              <FiLogOut className="mr-2" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
