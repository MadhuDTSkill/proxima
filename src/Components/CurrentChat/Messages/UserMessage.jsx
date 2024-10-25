import React from 'react'

const UserMessage = ({
  message
}) => {
  return (
    <div className='max-w-3xl mx-auto'>
      <h1 className='font-semibold text-main text-lg my-2'>You</h1>
      <p className='text-black dark:text-slate-200 max-w-full overflow-y-auto'>
        {message.prompt}
      </p>
    </div>
  )
}

export default UserMessage