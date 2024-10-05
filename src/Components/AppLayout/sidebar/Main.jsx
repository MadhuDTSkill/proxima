import React, { useEffect, useState } from 'react';
import ChatItem from './ChatItem';
import apiCallWithToken from '../../../Functions/Axios';
import { useParams } from 'react-router-dom';
import { PiSpinnerGapBold } from "react-icons/pi";

const Main = () => {

  const {chat_id} = useParams()
  const [chats, setChats] = React.useState({});
  const [isLoading, setIsLoading] = useState(false)

  const getChats = () => {
    let url = 'chat'
    let body = {}
    let method = 'get'
    let loadingState = setIsLoading
    const onSuccess = (data) => {
      setChats(data)
    }
    const onError = (error) => {
      console.log(error)
    }
    apiCallWithToken(url, body, method, loadingState, onSuccess, onError)
  }



  useEffect(()=>{
    getChats()
  },[chat_id])

  return (
    <div className='flex-1 overflow-auto p-2'>
      {
        isLoading && chats.length === 0 ?
        <div className='h-full flex justify-center items-center'>
            <PiSpinnerGapBold size={20} className='text-main animate-spin'/>
        </div>
        :
        Object.keys(chats).map((period) => (
          <div key={period} className='mb-5'>
            {
              chats[period].length > 0 &&
              <>
                <h2 className='text-xs text-black font-bold mb-1'>{period}</h2>
                <div className='flex flex-col'>
                  {chats[period].map((chat, index) => (
                    <ChatItem key={index} chat={chat} />
                  ))}
                </div>
              </>
            }
          </div>
        ))
      }
    </div>
  );
};

export default Main;

const fakeChats = {
  "Today": [
    { "title": "Monthly Roadmap Review" },
    { "title": "Onboarding New Team Members" },
    { "title": "Quarterly Performance Evaluation" },
    { "title": "Backend Architecture Redesign" },
    { "title": "Database Migration Strategy" },
    { "title": "Marketing Campaign Launch" },
    { "title": "Weekly Team Sync" },
    { "title": "Bug Fixing Discussion" },
    { "title": "Discussing Project Updates" },
    { "title": "Client Feedback Meeting" },
    { "title": "Brainstorming Session on New Features" }
  ],
  "Previous 7 Days": [
    { "title": "Monthly Roadmap Review" },
    { "title": "Onboarding New Team Members" },
    { "title": "Quarterly Performance Evaluation" },
    { "title": "Backend Architecture Redesign" },
    { "title": "Database Migration Strategy" },
    { "title": "Marketing Campaign Launch" },
    { "title": "Weekly Team Sync" },
    { "title": "Bug Fixing Discussion" },
    { "title": "Weekly Team Sync" },
    { "title": "Bug Fixing Discussion" },
    { "title": "Sprint Retrospective" },
    { "title": "Feature Deployment Plan" }
  ],
  "Previous 30 Days": [
    { "title": "Monthly Roadmap Review" },
    { "title": "Onboarding New Team Members" },
    { "title": "Quarterly Performance Evaluation" },
    { "title": "Backend Architecture Redesign" },
    { "title": "Database Migration Strategy" },
    { "title": "Marketing Campaign Launch" },
    { "title": "Weekly Team Sync" },
    { "title": "Bug Fixing Discussion" },
    { "title": "Sprint Retrospective" },
    { "title": "Feature Deployment Plan" },
    { "title": "Weekly Team Sync" },
    { "title": "Bug Fixing Discussion" },
    { "title": "Sprint Retrospective" },
    { "title": "Feature Deployment Plan" }

  ]
}
