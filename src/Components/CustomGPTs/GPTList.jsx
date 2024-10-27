import React, { useEffect } from 'react';
import GptCard from './GptCard';
import { PiSpinnerGap } from "react-icons/pi";
import apiCallWithToken from '../../Functions/Axios';
import InfoModal from './InfoModal';

const GptList = () => {
    const [gptModels, setGptModels] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedGpt, setSelectedGpt] = React.useState(null);

    const getGptModels = () => {
        let url = 'chat/my-gpts'
        let body = {}
        let method = 'get'
        let loadingState = setIsLoading
        const onSuccess = (response) => {
            setGptModels(response)
        }
        const onError = (error) => {
            console.log(error)
        }
        apiCallWithToken(url, body, method, loadingState, onSuccess, onError)
    };

    const handleCardClick = (gpt) => {
        setSelectedGpt(gpt);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedGpt(null); // Clear the selected model
    };

    useEffect(() => {
        getGptModels();
    }, []);

    return (
        <div className="grid lg:grid-cols-2 gap-4 max-w-[750px] mx-auto">
            {gptModels.length > 0 ? (
                gptModels.map((gpt, index) => (
                    <GptCard key={index} gpt={gpt} onClick={() => handleCardClick(gpt)} />
                ))
            ) : (
                isLoading ? (
                    <div className="h-full animate-pulse flex justify-center items-center text-main">
                        <PiSpinnerGap size={30} className="text-center text-main animate-spin" />
                    </div>
                ) : (
                    <div className="text-center text-gray-600 dark:text-slate-300 col-span-2">
                        No GPT models available at the moment.
                    </div>
                )
            )}
            <InfoModal isOpen={isModalOpen} onClose={closeModal} gptData={selectedGpt} />
        </div>
    );
};

export default GptList;
