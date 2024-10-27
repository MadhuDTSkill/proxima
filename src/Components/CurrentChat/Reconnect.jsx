import React from 'react';
import { PiSpinnerGapBold } from "react-icons/pi"; // Import the spinner icon
import { IoMdRefresh } from "react-icons/io";
import Button from '../ui/Button';

const Reconnect = ({ onReconnect, isConnecting }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-32 text-center p-4">
            {/* Conditional rendering based on isConnecting */}
            {!isConnecting && (
                <p className="text-gray-700 text-[11px] dark:text-slate-300 mb-4">
                    {'Something went wrong. Please try reconnecting.'}
                </p>
            )}

            {isConnecting ? (
                <div className="flex items-center space-x-2">
                    <PiSpinnerGapBold size={24} className="animate-spin text-main" /> {/* Spinning loader */}
                    <span className="text-main font-semibold">Connecting...</span>
                </div>
            ) : (
                <Button
                    onClick={onReconnect}
                    extraClassName="flex items-center bg-main px-6 py-2 text-[15px] rounded-3xl shadow-md hover:bg-opacity-90 transition duration-300 ease-in-out"
                >
                    <IoMdRefresh size={20} className="mr-2" />
                    Reconnect
                </Button>
            )}
        </div>
    );
};

export default Reconnect;
