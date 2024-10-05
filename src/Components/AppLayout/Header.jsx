import TitleAndModelSelection from './TitleAndModelSelection';
import ProfileMenu from './ProfileMenu';
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

const Header = ({
  setIsDrawerOpen,
  isDrawerOpen
}) => {


  return (
    <div className='w-full'>
      <div className='flex cp rounded-lg justify-between items-center p-2 px-0 md:px-2 lg:px-5'>
        <TbLayoutSidebarLeftExpand onClick={()=> setIsDrawerOpen(!isDrawerOpen)} className='text-4xl mr-2 text-main md:hidden'/>
        <TitleAndModelSelection/>
        <ProfileMenu/>
      </div>
    </div>
  )
}

export default Header