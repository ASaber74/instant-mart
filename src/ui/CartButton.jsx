import { useDarkMode } from '../context/DarkModeContext';
import { IoCart } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function CartButton() {
  const { isDarkMode } = useDarkMode();
  const svgClass = 'w-6 h-6';
  return (
    <Link to='/cart'>
      <button
        aria-label="Cart button"
        className="mt-[4px] hidden rounded-full border-transparent  bg-none p-1 transition duration-200 ease-in-out hover:bg-grey-2 md:block "
      >
        {isDarkMode ? (
          <IoCart className={svgClass} />
        ) : (
          <IoCartOutline className={svgClass} />
        )}
      </button>
    </Link>
  );
}

export default CartButton;
