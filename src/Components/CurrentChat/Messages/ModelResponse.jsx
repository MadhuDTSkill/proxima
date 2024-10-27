import React from 'react'
import Title from '../../../Title'
import Markdown from 'react-markdown'
import WordTypewriter from '../../AppLayout/Typing'
import { MdErrorOutline } from "react-icons/md";

const ModelResponse = ({
  message,
  isLoading,
  isStreaming,
  addMessage,
  waitingMessage = 'Loading...',
  error
}) => {
  return (
    <div className=''>
      <h1 className='font-semibold text-main max-w-3xl text-lg mx-auto my-2'><Title /></h1>
      <div className='bg-main hover:bg-opacity-10 bg-opacity-5 p-2'>
        <div className='text-black dark:text-slate-300 max-w-3xl mx-auto'>
          {
            isLoading ?
              <div className='text-black dark:text-slate-300 max-w-3xl mx-auto'>
                <div className='animate-pulse language-javascript dflex justify-center items-center text-main'>
                  {
                    waitingMessage?.split("").map((char, index) => (
                      <span
                        key={index}
                        className="twinkle"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    ))}
                </div>
              </div>
              :
              isStreaming ?
                <div className={'animate-pulse'}>
                  <WordTypewriter
                    text={message.response}
                    onComplete={() => {
                      addMessage(message.prompt, message.response)
                    }}
                  />
                </div>
                :
                error ?
                  <div className='bg-red-400/20 flex items-stretch  gap-2 p-2 rounded-lg'>
                    <MdErrorOutline size={50} className='text-red-500' />
                    <Markdown >
                      {message.response}
                    </Markdown>
                  </div>
                  :
                  <div>
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


