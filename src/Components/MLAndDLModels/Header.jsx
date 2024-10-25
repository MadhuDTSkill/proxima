import React from 'react'
import ProfileMenu from '../AppLayout/ProfileMenu'

const Header = () => {
    return (
        <div>
            <div className='flex cp rounded-lg justify-between items-center p-2 px-0 md:px-2 lg:px-5'>
                <h1 className='text-lg text-main text-center font-bold zero'>ML / DL Models</h1>
                <ProfileMenu />
            </div>
        </div>
    )
}

export default Header