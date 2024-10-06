import React from 'react'
import UserMessage from './UserMessage'
import ModelResponse from './ModelResponse'

const Message = ({
  message,
  isLoading,
  isStreaming,
  streamingElementRef,
  waitingMessage
}) => {
  return (
    <div className=''>
      <UserMessage message={message} />
      <ModelResponse 
        streamingElementRef = {streamingElementRef} 
        isLoading = {isLoading} 
        isStreaming = {isStreaming} 
        message={message} 
        waitingMessage = {waitingMessage}
      />
    </div>
  )
}

export default Message