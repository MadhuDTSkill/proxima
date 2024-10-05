import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getData } from '../Functions/localStorage'
import apiCallWithToken from '../Functions/Axios';
import {createRoot} from 'react-dom/client'
import Markdown from 'react-markdown'


const token = getData('accessToken')

const ChatConnectionWrapper = (WrappedComponent) => {
    return (props) => {
        const ws = useRef(null);
        const { chat_id } = useParams()
        const dispatch = useDispatch()
        const [isConnected, setIsConnected] = useState(false);
        const [isLoading, setIsLoading] = useState(false);
        const [isMessagesLoading, setIsMessagesLoading] = useState(true);
        const [isMessageCreateLoading, setIsMessageCreateLoading] = useState(false);
        const [isStreaming, setIsStreaming] = useState(false);
        const streamingElementRef = useRef(null)
        const rootRef = useRef(null)
        const [messages, setMessages] = useState([]);

        const sendPrompt = (prompt) => {
            if (ws.current && ws.current.readyState === WebSocket.OPEN) {
                setIsLoading(true)
                ws.current.send(JSON.stringify(prompt));
            }
        };

        const getMessages = () => {
            let url = `chat/${chat_id}/message/create-list/`
            let body = {}
            let method = 'get'
            let loadingState = setIsMessagesLoading
            const onSuccess = (data) => {
            setMessages(data)
            }
            const onError = (error) => {
                console.log(error)
            }
            apiCallWithToken(url, body, method, loadingState, onSuccess, onError)
        };
        
        const addMessage = (prompt, response) => {
            let url = `chat/${chat_id}/message/create-list/`
            let body = {
                prompt : prompt,
                chat : chat_id,
                response : response
            }
            let method = 'post'
            let loadingState = setIsMessageCreateLoading
            const onSuccess = (data) => {
                setMessages(messages => ([...messages, data]))
                setIsStreaming(false)
            }
            const onError = (error) => {
                console.log(error)
            }
            apiCallWithToken(url, body, method, loadingState, onSuccess, onError)
        };

        const setupWebSocket = () => {
            ws.current = ws.current || new WebSocket(`ws://127.0.0.1:8000/ws/chat/${chat_id}?token=${token}`);

            ws.current.onopen = () => {
                console.log("WebSocket connected!");
                getMessages()
                setIsConnected(true);
            };

            ws.current.onmessage = (event) => {
                const data = JSON.parse(event.data);
                if (data.response === '<start>') {
                    setIsStreaming(true)
                    setIsLoading(false)
                }
                else if (data.response === '<end>') {
                    addMessage(data?.prompt, data?.full_response)
                }
                else {
                    // if (streamingElementRef.current) {
                    //     createRoot(streamingElementRef.current).render(
                    //         <Markdown>{data.response}</Markdown>
                    //     )
                    // }
                };
            }

            ws.current.onerror = (event) => {
                console.error("WebSocket error observed:", event);
            };

            ws.current.onclose = (event) => {
                console.log(`WebSocket is closed now`);
            };
        };

        useEffect(() => {
            setupWebSocket();
            return () => {
                if (ws.current.readyState === WebSocket.OPEN) {
                    ws.current.close();
                    ws.current = null
                    setIsMessagesLoading(true)
                    setIsConnected(false);
                }
            };
        }, [chat_id]);

        return (
            <WrappedComponent
                {...props}
                isConnected={isConnected}
                isLoading={isLoading}
                isMessagesLoading = {isMessagesLoading}
                isMessageCreateLoading={isMessageCreateLoading}
                isStreaming={isStreaming}
                sendPrompt={sendPrompt}
                messages = {messages}
                streamingElementRef = {streamingElementRef}
            />
        )
    }
}

export default ChatConnectionWrapper

