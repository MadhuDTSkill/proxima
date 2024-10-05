import React, { useState } from 'react'
import Intro from "../../Components/NewChat/Intro";
import Prompt from '../../Components/CurrentChat/Prompt/Prompt'
import apiCallWithToken from '../../Functions/Axios';
import { useNavigate } from 'react-router-dom';
import Message from '../../Components/CurrentChat/Messages/Message';


const NewChat = () => {

    const nav = useNavigate()
    const [prompt, setPrompt] = useState('');
    const [_, setStaticPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleNavigate = (id, state) => {
      return nav(`/c/${id}`, {state})
    }

    const createNewChat = () => {
      let url = 'chat/'
      let body = {
        first_prompt : prompt
      }
      let method = 'post'
      let loadingState = setIsLoading
      const onSuccess = (data) => {
        setPrompt('')
        handleNavigate(data.id, {prompt})
      }
      const onError = (error) => {
        console.log(error)
      }
      apiCallWithToken(url, body, method, loadingState, onSuccess, onError)
    }

  return (
    <div className='h-full flex flex-col max-w-3xl mx-auto'>
      <div className='flex-1 overflow-y-auto md:p-3'>
          {
            isLoading ? (
                <Message isLoading = {isLoading} message={{
                  id: 1,
                  prompt: prompt,
                  user: "Madhu",
                }} />
            ) : (
              <Intro handlePromptClick={createNewChat} />
            )
          }
      </div>
      <div>
          <Prompt
           isLoading = {isLoading}
           prompt = {prompt}
           setPrompt = {setPrompt} 
           setStaticPrompt = {setStaticPrompt} 
           onSubmit={createNewChat} />
      </div>

    </div>
  )
}

export default NewChat