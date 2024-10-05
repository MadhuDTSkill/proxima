import { useState } from 'react';
import { Outlet} from 'react-router-dom'
import SideBar from '../Components/AppLayout/sidebar/SideBar'
import Header from '../Components/AppLayout/Header';

const AppLayout = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className='flex h-dvh bg-slate-100 font-main p-2 md:gap-1 lg:gap-2'>
        <div>
            <SideBar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>
        </div>
        <div className='p-1 w-full flex flex-col h-full shadow-lg rounded-xl bg-white'>
            <div className='flex-0'>
              <Header setIsDrawerOpen={setIsDrawerOpen}/>
            </div>
            <div className='flex-1 overflow-y-auto'>
              <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default AppLayout