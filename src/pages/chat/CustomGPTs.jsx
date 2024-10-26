import React from 'react'
import Header from '../../Components/CustomGPTs/Header'
import GptList from '../../Components/CustomGPTs/GPTList'

const CustomGPTs = () => {
    return (
        <div className='h-full flex flex-col'>
            <Header />
            <GptList />
        </div>
    )
}

export default CustomGPTs