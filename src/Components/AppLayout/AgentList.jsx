 
import { useState, useEffect } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { PiSpinnerGapBold } from "react-icons/pi";
import apiCall from '../../Axios';

const AgentItems = () => {
    const [searchText, setSearchText] = useState('');
    const [agents, setAgents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const nav = useNavigate();
    const { agent_id } = useParams();

    // const scrollToTop = () => {
    //     let ele = document.getElementById('spaceAgents');
    //     if (ele) {
    //         ele.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    const handleNavigate = (agent) => {
        nav(`/a/${agent.id}`, {state : agent});
    };

    const getAgents = async () => {
        let url = 'api/agents'
        let body = {}
        let method = 'get'
        let loadingState = setIsLoading
        const onSuccess = (data) => {
            setAgents(data)
        }
        const onError = (error) => {
          console.log(error?.response?.data?.detail || 'Error fetching Agents')
        }
        apiCall(url, body, method, loadingState, onSuccess, onError)
      }

      const deleteAgent = async (agentId) => {
        let url = `api/agents/${agentId}/`;
        let method = 'delete';
        let loadingState = setIsLoading
        const onSuccess = () => {
            setAgents(agents.filter(agent => agent.id !== agentId)); // Remove the deleted agent from the list
            nav('/'); // Redirect to home
        };
        const onError = (error) => {
            console.log(error?.response?.data?.detail || 'Error deleting Agent');
        };
        apiCall(url, {}, method, loadingState, onSuccess, onError);
    };

    const getFilteredAgents = () => {
        if (!searchText) return agents;

        const filteredAgents = agents.filter(agent =>
                agent.name.toLowerCase().includes(searchText.toLowerCase())
            );
            return filteredAgents;
        };
        
    const filteredAgents = getFilteredAgents();

    useEffect(() => {
        getAgents();
    }, [agent_id]);


    return (
        <div className='flex flex-col h-full'>
            {agents.length !== 0 && (
            <div className='flex-0 relative px-2'>
                <input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder={`Search Your Custom Agent ..`}
                    className='text-xs pl-5 prompt-placeholder my-2 bg-transparent p-2 w-full border-orange-600 outline-none hover:outline-none'
                />
                <IoSearch className='absolute top-2 right-100 mt-2 mr-2 text-gray-600 opacity-50' size={15} />
            </div>
        )}
        <div className='flex-1 overflow-auto h-full px-1'>
            <span id='customAgents' className='opacity-0 h-0'></span>
            <div className='grid grid-rows-1 duration-300 transition'>
                {filteredAgents.map((agent, index) => (
                    <div
                        id={agent?.id}
                        onClick={() => handleNavigate(agent)}
                        key={index}
                        className={`flex justify-between p-2 px-1 cp hover:bg-gray-900 bg-opacity-35 rounded-lg duration-200 transition ${agent_id === agent?.id ? 'bg-gray-600' : ''}`}
                    >
                        <div className='w-full px-1 flex items-center justify-between group'>
                            <span className='truncate'>{agent?.name}</span>
                            <div className='group-hover:flex items-center justify-evenly hidden'>
                                <MdDeleteOutline className='text-xl mx-1 text-orange-400' onClick={() => deleteAgent(agent.id)}/>
                                <IoMdInformationCircle className='text-xl mx-1'/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {filteredAgents.length === 0 && !isLoading && (
                <div className='flex justify-center items-center h-full'>
                    <h1 className='text-gray-700 font-main'>No Custom Agents</h1>
                </div>
            )}
            {isLoading && (
                <div className='flex justify-center items-center h-full'>
                    <PiSpinnerGapBold size={20} className='animate-spin icon-color' />
                </div>
            )}
        </div>
    </div>  
    );
};

export default AgentItems;
