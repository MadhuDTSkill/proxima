import React from 'react'

const UserMessage = ({
  message
}) => {
  return (
    <div className='max-w-3xl mx-auto'>
      <h1 className='font-semibold text-main my-2'>You</h1>
      <p className='text-black'>{message.prompt}</p>
    </div>
  )
}

export default UserMessage