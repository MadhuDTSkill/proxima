import Button from '../../ui/Button'
import { WiStars } from "react-icons/wi";

const Header = () => {
  return (
    <div className='flex-0 justify-center items-center flex flex-col mb-2 px-1.5'>
        <Button href={'/'} extraClassName='w-full flex justify-center font-semibold items-center'><WiStars className='text-2xl mx-2'/> New Chat <WiStars className='text-2xl mx-2'/></Button>
    </div>

  )
}

export default Header