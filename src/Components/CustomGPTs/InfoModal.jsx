// GptModal.js
import React from 'react';
import { GiBrain } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const InfoModal = ({ isOpen, onClose, gptData }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleStartChat = () => {
        navigate(`/g/${gptData.slug}`);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg max-w-[600px] w-full h-[90%] overflow-auto flex flex-col">
                <div className="mb-4 self-end">
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                        <MdClose className="text-2xl" />
                    </button>
                </div>

                <div className='flex-1 overflow-auto flex flex-col p-2 md:p-5 lg:p-10'>
                    <div className="flex flex-col items-center mb-2">
                        <GiBrain className="text-main text-7xl mb-3" />
                        <h2 className="text-3xl font-thin text-center">{gptData.name}</h2>
                    </div>

                    <p className="text-sm text-gray-700 dark:text-slate-300 mb-6 text-center">{gptData.short_description}</p>

                    <p className="mb-4 text-gray-600 dark:text-slate-300 text-center">{gptData.long_description}</p>

                    <h3 className="text-lg text-left font-semibold mb-2">Conversation Starters</h3>
                    <div className="grid lg:grid-cols-2 gap-4 mb-4">
                        {gptData.conversation_starters.map((prompt, index) => (
                            <div key={index} className="bg-gray-100 dark:bg-slate-900 p-4 rounded-3xl rounded-bl-none shadow hover:shadow-lg transition">
                                <p>{prompt}</p>
                            </div>
                        ))}
                    </div>

                    {/* <h3 className="text-lg font-semibold mb-2">System Prompt</h3>
                    <p className="text-gray-600 dark:text-slate-300 whitespace-pre-wrap text-center">{gptData.system_prompt}</p> */}
                </div>
                <div>
                    <button onClick={handleStartChat} className="mt-4 w-full p-2 bg-main text-slate-100 dark:text-slate-100 rounded-3xl">
                        Start Chat
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;
