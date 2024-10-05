import React from 'react'
import Title from '../../../Title'
import Markdown from 'react-markdown'
import { PiSpinnerGap } from "react-icons/pi";

const ModelResponse = ({
  message,
  isLoading,
  isStreaming,
  streamingElementRef
}) => {
  return (
    <div className=''>
      <h1 className='font-semibold text-main max-w-3xl mx-auto my-2'><Title/></h1>
      <div className='bg-main hover:bg-opacity-10 bg-opacity-5 p-2'>
        <div className='text-black max-w-3xl mx-auto'>
          {
            isLoading ?
            <div className='text-black max-w-3xl mx-auto'>
              <div className='animate-pulse dflex justify-center items-center text-main'>
                <PiSpinnerGap size={30} className='text-center text-main animate-spin'/>
              </div>
            </div>  
            :
              <div>
                <Markdown >
                    {message.response}
                </Markdown>
              </div>
          }
          <div id='stream' ref={streamingElementRef} className={isStreaming ? 'animate-pulse' : ''}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModelResponse