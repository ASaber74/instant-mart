import { useDarkMode } from '../context/DarkModeContext';
import { IoCart } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';

function CartButton() {
  const { isDarkMode } = useDarkMode();
  const svgClass = 'w-6 h-6';
  return (
    <button className="hover:bg-grey-2 mt-[4px] hidden rounded-full  border-transparent bg-none p-1 transition duration-200 ease-in-out md:block ">
      {isDarkMode ? (
        <IoCart className={svgClass} />
      ) : (
        <IoCartOutline className={svgClass} />
      )}
    </button>
  );
}

export default CartButton;
