import React from 'react'
import Title from '../../../Title'
import Markdown from 'react-markdown'

const ModelResponse = ({
  message,
  isLoading,
  isStreaming,
  waitingMessage = 'Loading...',
}) => {
  return (
    <div className=''>
      <h1 className='font-semibold text-main max-w-3xl text-lg mx-auto my-2'><Title/></h1>
      <div className='bg-main hover:bg-opacity-10 bg-opacity-5 p-2'>
        <div className='text-black max-w-3xl mx-auto'>
          {
            isLoading ?
            <div className='text-black max-w-3xl mx-auto'>
              <div className='animate-pulse language-javascript dflex justify-center items-center text-main'>
                {
                  waitingMessage?.split("").map((char, index) => (
                    <span 
                        key={index}
                        className="twinkle"
                        style={{ animationDelay: `${index * 0.1}s` }} 
                    >
                        {char}
                    </span>
                ))}
              </div>
            </div>  
            :
              <div className={isStreaming ? 'animate-pulse' : ''}>
                <Markdown >
                    {message.response}
                </Markdown>
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ModelResponse


