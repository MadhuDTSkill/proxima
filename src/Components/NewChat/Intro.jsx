import React from 'react';
import { FaRobot, FaRocket, FaQuestionCircle, FaGlobe, FaMeteor } from 'react-icons/fa';
import Title from '../../Title';

const Intro = ({ handlePromptClick }) => {
  // Default prompts with interesting questions
  const defaultPrompts = [
    { text: "How do AI systems learn?", icon: <FaRobot /> },
    { text: "What's the future of space travel?", icon: <FaRocket /> },
    { text: "What are the black holes?", icon: <FaMeteor /> },
    { text: "Are we alone ?", icon: <FaGlobe /> },
  ];

  return (
    <div className="h-full flex items-center justify-center px-4 text-center">
        <div>
            {/* Website title */}
            <h1 className="text-5xl font-bold text-main mb-6"><Title /></h1>

            {/* Introductory text */}
            <p className="text-xs text-gray-700 mb-8">
                Welcome to <Title flag />! Here, you can chat with cutting-edge LLM models. Feel free to ask any question—from everyday curiosities to complex scientific inquiries—and get insightful responses in real-time. Start your conversation now or try one of the prompts below to explore interesting topics.
            </p>

            {/* Grid of default prompts */}
            <div className="grid grid-cols-2 gap-6">
                {defaultPrompts.map((prompt, index) => (
                <button
                    key={index}
                    onClick={() => handlePromptClick(prompt.text)}
                    className="text-main font-semibold text-lg bg-main bg-opacity-5 hover:bg-opacity-10 p-4 rounded-lg transition duration-200 ease-in-out shadow-md flex items-center justify-center space-x-3"
                >
                    {prompt.icon}
                    <span>{prompt.text}</span>
                </button>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Intro;
