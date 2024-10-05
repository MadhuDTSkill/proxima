import React from 'react';
import { CiSettings } from "react-icons/ci";
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router-dom for navigation
import Title from '../../../Title';

const Footer = () => {
  const navigate = useNavigate(); // To handle navigation to settings

  const handleSettingsClick = () => {
    navigate('/settings'); // Redirect to settings page
  };

  return (
    <div className='p-4 w-full border-t'>
      <div className='flex justify-between items-center'>
        {/* Site Name and Version */}
        <div>
          <h1 className='font-bold text-[15px] text-main'><Title/> <span className='text-[9.5px] text-gray-500'>v1.0.0</span></h1>
        </div>

        {/* Settings Icon */}
        <CiSettings 
          className='text-2xl text-gray-500 cursor-pointer' 
          title='Settings'
          onClick={handleSettingsClick} // Navigate to settings on click
        />
      </div>  
    </div>
  );
};

export default Footer;
