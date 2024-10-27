import React from 'react'
import Header from '../../Components/CustomGPTs/Header'
import GptList from '../../Components/CustomGPTs/GPTList'
import Header2 from '../../Components/CustomGPTs/Header2'

const CustomGPTs = () => {
    return (
        <div className='h-full flex flex-col'>
            <Header />
            <div className='flex-1 overflow-auto'>
                <Header2 />
                <GptList />
            </div>
        </div>
    )
}

export default CustomGPTs