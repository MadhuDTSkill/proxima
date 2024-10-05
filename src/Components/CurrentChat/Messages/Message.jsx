import React from 'react'
import UserMessage from './UserMessage'
import ModelResponse from './ModelResponse'

const Message = ({
  message,
  isLoading,
  isStreaming,
  streamingElementRef
}) => {
  return (
    <div className=''>
      <UserMessage message={message} />
      <ModelResponse streamingElementRef = {streamingElementRef} isLoading = {isLoading} isStreaming = {isStreaming} message={message} />
    </div>
  )
}

export default Message