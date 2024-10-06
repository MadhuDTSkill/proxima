import Button from '../../ui/Button';
import { MdAdd } from "react-icons/md"; // Importing the plus icon
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import Title from '../../../Title';

const Header = ({
  setIsDrawerOpen
}) => {
  return (
    <div className='flex-0 justify-center items-center flex flex-col mb-2 px-1.5'>
      <div className='flex items-center justify-between w-full pb-2 md:hidden'> {/* Add w-full for full width */}
        <h1 className='text-xl text-main font-semibold flex items-center'> {/* Added flex for inline */}
          <Title />
        </h1>
        <div className='flex items-center' onClick={()=>setIsDrawerOpen(false)}> {/* Add flex to keep items inline */}
          <TbLayoutSidebarRightCollapse className='text-xl text-main' />
        </div>
      </div>
      <Button href={'/'} extraClassName='w-full flex justify-center font-semibold items-center'>
        New Chat 
        <MdAdd className='text-xl mx-2' /> {/* Plus icon on the right */}
      </Button>
    </div>
  );
}

export default Header;
