import React, { useState, useRef, useEffect } from 'react';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { FaUserCircle, FaRegUser } from 'react-icons/fa'; // Default user icon
import SettingsModal from '../Settings/SettingsModal';
import DarkModeToggle from '../../DarkModeToggle';
import apiCallWithToken from '../../Functions/Axios';

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef(null);

  const getUser = () => {
    let url = 'users/user-details/';
    let body = {};
    let method = 'get';
    let loadingState = setIsLoading;
    const onSuccess = (response) => {
      setUser(response); // Set user data from API response
    };
    const onError = (error) => {
      console.log(error);
    };
    apiCallWithToken(url, body, method, loadingState, onSuccess, onError);
  };

  const openProfileMenu = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getUser(); // Fetch user data when component mounts
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

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = '/signin';
  };

  return (
    <div className="relative" ref={menuRef}>
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-slate-100 bg-main cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {user.name ? user.name.charAt(0).toUpperCase() : <FaUserCircle size={24} />}
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 min-w-48 rounded-2xl shadow-lg bg-white text-gray-800 dark:text-slate-300 dark:bg-slate-900 border dark:border-main z-10">
          <ul className="p-3 w-full">
            <li className="flex gap-2 justify-center items-center p-3 w-full rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-100 bg-main cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {user.name ? user.name.charAt(0).toUpperCase() : <FaUserCircle size={24} />}
              </div>
              <span className='truncate font-bold'>{user.name || 'Guest'}</span>
            </li>

            <li
              className="flex items-center p-3 w-full rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer"
              onClick={openProfileMenu}
            >
              <FiSettings className="mr-2" />
              <span>Settings</span>
            </li>

            <li
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer"
              onClick={handleLogout}
            >
              <FiLogOut className="mr-2" />
              <span>Logout</span>
            </li>

            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </div>
      )}

      <SettingsModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ProfileMenu;
