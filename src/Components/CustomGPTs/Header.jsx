import React, { useState } from 'react';
import ProfileMenu from '../AppLayout/ProfileMenu';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from react-icons

const Header = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Handle search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value); // Pass search term to parent for filtering
    };

    return (
        <div>
            {/* Header Section */}
            <div className='flex flex-col md:flex-row cp rounded-lg justify-between items-center p-2 px-0 md:px-2 lg:px-5'>
                <h1 className='text-lg text-main font-bold zero mb-2 md:mb-0'>My GPTs</h1>
                <ProfileMenu />
            </div>
            <div className='max-w-[750px] mx-auto'>
                {/* Welcome Message */}
                <div className="mt-4 text-center">
                    <h2 className="text-3xl zero font-extrabold text-main mb-2">My GPTs</h2>
                    <p className="text-gray-600 dark:text-slate-300 text-lg">
                        Create and explore custom GPTs with tailored skills and the knowledge for your unique needs and tasks.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="my-6 mb-14 flex justify-center w-full">
                    <div className="relative w-full">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            <FaSearch />
                        </span>
                        <input
                            type="text"
                            placeholder="Search GPTs by name..."
                            className="pl-10 p-4 w-full rounded-lg border dark:bg-transparent border-gray-300 focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
