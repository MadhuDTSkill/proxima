import Button from '../../ui/Button';
import { MdAdd } from "react-icons/md";
import { FaRobot, FaCogs } from "react-icons/fa";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import Title from '../../../Title';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header = ({ setIsDrawerOpen }) => {
  return (
    <div className='flex-0 justify-center items-center flex flex-col mb-2 px-1.5'>
      <div className='flex items-center justify-between w-full pb-2 md:hidden'>
        <h1 className='text-xl text-main font-semibold flex items-center'>
          <Title />
        </h1>
        <div className='flex items-center' onClick={() => setIsDrawerOpen(false)}>
          <TbLayoutSidebarRightCollapse className='text-xl text-main' />
        </div>
      </div>

      <Button href={'/'} extraClassName='w-full flex justify-center font-semibold items-center'>
        New Chat
        <MdAdd className='text-xl mx-2' />
      </Button>

      <div className='flex flex-col self-start mt-2 gap-1 w-full text-main font-semibold'>
        <Link to='/my-gpts' className='flex items-center truncate py-1.5 px-2.5 rounded-lg cp hover:bg-pink-100 dark:hover:bg-slate-800'>
          <FaRobot className='mr-2 text-lg mb-1' /> My GPTs
        </Link>
        <Link to='/ml-dl-models' className='flex items-center truncate py-1.5 px-2.5 rounded-lg cp hover:bg-pink-100 dark:hover:bg-slate-800'>
          <FaCogs className='mr-2 text-lg mb-1' /> ML / DL Models
        </Link>
      </div>
    </div>
  );
}

export default Header;
