import { HiMenu } from 'react-icons/hi';
import { useBurgerMenu } from '../context/BurgerMenuContext';

function BurgerMenuIcon() {
  const {toggleMenu } = useBurgerMenu();

  return (
    <button
      className="  mt-[4px] rounded-full  border-transparent bg-none p-1 transition duration-200 ease-in-out hover:bg-grey-2 md:hidden "
      onClick={toggleMenu}
      aria-label="open menu"
    >
      <HiMenu className="h-6 w-6  " />
    </button>
  );
}

export default BurgerMenuIcon;
