import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import SideBar from '../Components/AppLayout/sidebar/SideBar';
import Header from '../Components/AppLayout/Header';

const CustomGPTLayout = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { gpt_slug } = useParams();

    // Function to convert to title case
    const toTitleCase = (str) => {
        return str
            .split('-') // Split by hyphen
            .slice(2) // Skip the first two parts
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter and lower the rest
            .join(' '); // Join back with a space
    };

    const gptName = toTitleCase(gpt_slug) || 'Custom GPT';

    return (
        <div className='flex h-dvh bg-slate-100 dark:bg-black font-main p-2 px-1 md:gap-1 lg:gap-2'>
            <div>
                <SideBar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
            </div>
            <div className='p-1 w-full flex flex-col h-full shadow-lg rounded-xl bg-white dark:bg-gray-900'>
                <div className='flex-0'>
                    <Header title={gptName} setIsDrawerOpen={setIsDrawerOpen} />
                </div>
                <div className='flex-1 overflow-y-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default CustomGPTLayout;
