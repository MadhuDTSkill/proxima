import React from 'react';
import Message from './Message';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { IoMdArrowDown } from 'react-icons/io';

const Messages = ({
  messages,
  staticPrompt,
  isLoading,
  isStreaming,
  scrollCallBack,
  waitingMessage
}) => {

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  const latestMessageState = useSelector(
    (state) => state.store.latestMessage
  );

  return (
    <div className='relative'>
      <div className='flex flex-col gap-2 w-full'>
        {messages.map((message) => (
          <Message key={message.id} message={message} showMenu />
        ))}
        {isStreaming && (
          <Message
            message={latestMessageState}
            isStreaming={isStreaming}
          />
        )}
        {isLoading && (
          <Message
            key='loading-message'
            isLoading={isLoading}
            waitingMessage = {waitingMessage}
            message={{
              id: 'loading',
              prompt: staticPrompt,
              user: 'User123',
            }}
          />
        )}
      </div>
      {/* Scroll to bottom button */}
      <div
        onClick={scrollCallBack}
        className={`${
          !inView ? 'opacity-100' : 'opacity-0'
        } sticky z-20 inset-x-0 bottom-0 flex justify-center transition-opacity duration-300 ease-in-out cp`}
      >
        <IoMdArrowDown className='bg-main p-1.5 text-white rounded-full' size={30} />
      </div>
      <span ref={ref} id='message-bottom'></span>
    </div>
  );
};

export default Messages;