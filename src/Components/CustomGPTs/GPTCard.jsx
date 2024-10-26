import React from 'react';
import { GiBrain } from 'react-icons/gi'; // Importing brain icon from react-icons

const GptCard = ({ name, description }) => {
    // Function to truncate description if it's too long
    const truncateDescription = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-sm border border-gray-200 hover:shadow-lg transition-shadow duration-200 ease-in-out">
            <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
                {/* Brain Icon */}
                <GiBrain className="text-main text-4xl" />
                <div>
                    {/* GPT Name */}
                    <h2 className="font-bold text-main mb-2">{name}</h2>
                    {/* GPT Description */}
                    <p className="text-xs text-gray-600 dark:text-slate-300">
                        {truncateDescription(description, 100)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GptCard;
