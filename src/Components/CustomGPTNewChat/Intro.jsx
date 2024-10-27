import React from 'react';
import { GiBrain } from 'react-icons/gi'; // Importing brain icon from react-icons

const Intro = ({ gpt, handlePromptClick }) => {
  return (
    <div className="h-full flex items-center justify-center px-4 text-center">
      <div>
        {/* GPT title with brain icon */}
        <div className="text-5xl font-bold text-main mb-6">
          <GiBrain className="inline-block text-6xl mb-4" /> {/* Icon added here */}
          <h1>{gpt?.name}</h1>
        </div>

        {/* Short description */}
        <p className="text-xs text-gray-700 dark:text-slate-300 mb-4">
          {gpt?.short_description}
        </p>

        {/* Long description */}
        <p className="text-xs text-gray-700 dark:text-slate-300 mb-8">
          {gpt?.long_description}
        </p>

        {/* Grid of conversation starters */}
        <div className="grid grid-cols-2 gap-6">
          {gpt?.conversation_starters?.map((starter, index) => (
            <button
              key={index}
              onClick={() => handlePromptClick(starter)}
              className="text-main font-semibold text-lg bg-main bg-opacity-5 hover:bg-opacity-10 p-4 rounded-lg transition duration-200 ease-in-out shadow-md flex items-center justify-center space-x-3"
            >
              <span>{starter}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
