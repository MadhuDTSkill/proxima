import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi'; 
import Title from '../../Title';

const TitleAndModelSelection = () => {
  const [selectedModel, setSelectedModel] = useState("Model 1"); // Initial model
  const [isOpen, setIsOpen] = useState(false); // For controlling the dropdown
  const dropdownRef = useRef(null); // Ref for the dropdown container

  // Example data for the dropdown menu
  const models = {
    HuggingFace: [
      { title: "Distil-Whisper English", id: "distil-whisper-large-v3-en" },
    ],
    Google: [
      { title: "Gemma 2 9B", id: "gemma2-9b-it" },
      { title: "Gemma 7B", id: "gemma-7b-it" },
    ],
    Groq: [
      { title: "Llama 3 Groq 70B Tool Use", id: "llama3-groq-70b-8192-tool-use-preview" },
      { title: "Llama 3 Groq 8B Tool Use", id: "llama3-groq-8b-8192-tool-use-preview" },
    ],
    Meta: [
      { title: "Llama 3.1 70B", id: "llama-3.1-70b-versatile" },
      { title: "Llama 3.1 8B", id: "llama-3.1-8b-instant" },
      { title: "Llama 3.2 1B (Preview)", id: "llama-3.2-1b-preview" },
      { title: "Llama 3.2 3B (Preview)", id: "llama-3.2-3b-preview" },
      { title: "Llama 3.2 11B Vision (Preview)", id: "llama-3.2-11b-vision-preview" },
    ],
    Mistral: [
      { title: "Mixtral 8x7B", id: "mixtral-8x7b-32768" },
    ],
    OpenAI: [
      { title: "Whisper", id: "whisper-large-v3" },
    ],
  };

  // Handle selecting a model
  const handleModelSelect = (model) => {
    setSelectedModel(model);
    setIsOpen(false); // Close dropdown after selection
  };

  // useEffect to handle click outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown if clicked outside
      }
    };

    // Add event listener for mouse clicks
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      // Cleanup event listener on unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative w-96" ref={dropdownRef}>
      {/* Dropdown trigger */}
      <div
        className="flex items-center cursor-pointer rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className='text-main text-xl font-main font-bold flex items-center'><Title/></h1>
        <h1 className="text-[10px] mx-2 font-bold">{selectedModel.title}</h1>
        <FiChevronDown className="text-2xl text-main" />
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute w-full border mt-2 rounded-2xl shadow-lg bg-white z-10 h-[350px] py-2 px-1">
          <div className='h-full overflow-y-auto'>
            {Object.keys(models).map((category) => (
              <div key={category} className="p-4 border-b">
                <h2 className="font-bold text-xs text-black mb-2">{category}</h2>
                <div>
                  {models[category].map((model, index) => (
                    <h1
                      key={index}
                      className={`flex justify-between items-center p-2 text-sm font-thin rounded-lg hover:bg-gray-100 cursor-pointer ${
                        selectedModel === model ? 'bg-blue-100' : ''
                      }`}
                      onClick={() => handleModelSelect(model)}
                    >
                      <span>{model.title}</span>
                      {selectedModel.title === model.title && (
                        <span className="ml-2 text-xs bg-main text-white rounded-full px-2">
                          Active
                        </span>
                      )}
                    </h1>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TitleAndModelSelection;
