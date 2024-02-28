import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { useBurgerMenu } from '../context/BurgerMenuContext';

function BurgerMenuIcon() {
  const { isOpen, toggleMenu } = useBurgerMenu();

  return (
    <button
      className="hover:bg-grey-2  z-50 mt-[4px]  rounded-full border-transparent bg-none p-1 transition duration-200 ease-in-out md:hidden "
      onClick={toggleMenu}
    >
      {isOpen ? (
        <MdClose className="h-6 w-6  " />
      ) : (
        <HiMenu className="h-6 w-6" />
      )}
    </button>
  );
}

export default BurgerMenuIcon;
