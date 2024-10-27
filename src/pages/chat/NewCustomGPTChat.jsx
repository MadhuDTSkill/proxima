import React, { useEffect, useState } from 'react'
import Intro from "../../Components/CustomGPTNewChat/Intro";
import Prompt from '../../Components/CurrentChat/Prompt/Prompt'
import apiCallWithToken from '../../Functions/Axios';
import { useNavigate, useParams } from 'react-router-dom';
import Message from '../../Components/CurrentChat/Messages/Message';
import { setData } from '../../Functions/localStorage';


const NewCustomGPTChat = () => {

    const nav = useNavigate()
    const { gpt_slug } = useParams()
    const [gpt, setGPT] = useState({});
    const [prompt, setPrompt] = useState('');
    const [_, setStaticPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleNavigate = (id, state) => {
        return nav(`/c/${id}`, { state })
    }

    const getGPT = () => {
        let url = `chat/my-gpts/${gpt_slug}`
        let body = {}
        let method = 'get'
        let loadingState = setIsLoading
        const onSuccess = (data) => {
            setGPT(data)
        }
        const onError = (error) => {
            console.log(error)
        }
        apiCallWithToken(url, body, method, loadingState, onSuccess, onError)
    }

    const createNewChat = (tempPrompt = null) => {
        setPrompt('')
        let url = 'chat/'
        let body = {
            first_prompt: tempPrompt || prompt
        }
        tempPrompt && setPrompt(tempPrompt)
        let method = 'post'
        let loadingState = setIsLoading
        const onSuccess = (data) => {
            setData('newChat', data.id)
            handleNavigate(data.id, { prompt: tempPrompt || prompt })
        }
        const onError = (error) => {
            console.log(error)
        }
        apiCallWithToken(url, body, method, loadingState, onSuccess, onError)
    }

    useEffect(() => {
        getGPT()
    }, [])

    return (
        <div className='h-full flex flex-col max-w-3xl mx-auto'>
            <div className='flex-1 overflow-y-auto md:p-3'>
                {
                    isLoading ? (
                        <Message isLoading={isLoading} message={{
                            id: 1,
                            prompt: _,
                            user: "Madhu",
                        }} />
                    ) : (
                        <Intro gpt={gpt} handlePromptClick={createNewChat} />
                    )
                }
            </div>
            <div>
                <Prompt
                    isLoading={isLoading}
                    prompt={prompt}
                    setPrompt={setPrompt}
                    setStaticPrompt={setStaticPrompt}
                    onSubmit={createNewChat} />
            </div>

        </div>
    )
}

export default NewCustomGPTChat