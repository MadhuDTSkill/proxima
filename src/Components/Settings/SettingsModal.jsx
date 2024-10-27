import React from 'react';
import { GiBrain } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

const SettingsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg max-w-[600px] w-full h-[90%] overflow-auto flex flex-col">
                {/* Close button */}
                <div className="mb-4 self-end">
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                        <MdClose className="text-2xl" />
                    </button>
                </div>

                {/* Placeholder content */}
                <div className='flex-1 overflow-auto flex flex-col p-2 md:p-5 lg:p-10'>
                    <div className="flex flex-col items-center mb-2">
                        <GiBrain className="text-main text-7xl mb-3" />
                        <h2 className="text-3xl font-thin text-center">Settings Modal</h2>
                    </div>

                    <p className="text-sm text-gray-700 dark:text-slate-300 mb-6 text-center">
                        This is a placeholder description for testing the modal component.
                    </p>

                    <p className="mb-4 text-gray-600 dark:text-slate-300 text-center">
                        You can replace this content with dynamic data later.
                    </p>
                </div>

                {/* Placeholder button */}
                <div>
                    <button className="mt-4 w-full p-2 bg-main text-slate-100 dark:text-slate-100 rounded-3xl">
                        Placeholder Button
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;
