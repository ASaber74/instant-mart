import { useDarkMode } from '../context/DarkModeContext';
import { IoCart } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function CartButton() {
  const { isDarkMode } = useDarkMode();
  const svgClass = 'w-6 h-6';
  return (
    <Link to="/cart">
      <button
        aria-label="Cart button"
        className="mt-[4px] hidden rounded-full border-transparent  bg-none p- transition duration-200 ease-in-out hover:bg-grey-2 md:block relative"
      >
        {isDarkMode ? (
          <IoCart className={svgClass} />
        ) : (
          <IoCartOutline className={svgClass} />
        )}
        <span className="absolute top-2/3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-sm text-white left-3">
          0
        </span>
      </button>
    </Link>
  );
}

export default CartButton;
