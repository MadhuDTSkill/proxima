import React, { useState } from 'react';
import ProfileMenu from '../AppLayout/ProfileMenu';

const Header = ({ onSearch }) => {

    return (
        <div className='flex flex-col md:flex-row cp rounded-lg justify-between items-center p-2 px-0 md:px-2 lg:px-5'>
            <h1 className='text-lg text-main font-bold zero mb-2 md:mb-0'>My GPTs</h1>
            <ProfileMenu />
        </div>
    );
};

export default Header;
