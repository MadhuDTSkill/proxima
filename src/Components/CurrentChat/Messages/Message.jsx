import React from 'react'
import UserMessage from './UserMessage'
import ModelResponse from './ModelResponse'
import MessageMenu from './MessageMenu'

const Message = ({
  message,
  isLoading,
  isStreaming,
  streamingElementRef,
  waitingMessage,
  showMenu
}) => {
  return (
    <div className='group'>
      <UserMessage message={message} />
      <ModelResponse 
        streamingElementRef = {streamingElementRef} 
        isLoading = {isLoading} 
        isStreaming = {isStreaming} 
        message={message} 
        waitingMessage = {waitingMessage}
      />
      <div className='h-10 max-w-3xl mx-auto py-2'>
        {
          showMenu && (
          <div className='group-hover:opacity-100 opacity-0 duration-300 transition'>
            <MessageMenu message={message.response} />
          </div>
          )
        }
      </div>
    </div>
  )
}

export default Message