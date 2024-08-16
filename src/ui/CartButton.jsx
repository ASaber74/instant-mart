import { useDarkMode } from '../context/DarkModeContext';
import { IoCart } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import useUser from '../features/authentication/useUser';
import { useCart } from '../context/ShoppingCartContext';

function CartButton() {
  const { isDarkMode } = useDarkMode();
  const { user } = useUser();
  const { toggleCart } = useCart();

  const svgClass = 'w-6 h-6';
  return (
    // <Link to="/cart">
    <button
      onClick={user && toggleCart}
      aria-label="Cart button"
      className="p-1 relative mt-[4px] hidden  rounded-full border-transparent bg-none transition duration-200 ease-in-out hover:bg-grey-2 md:block"
    >
      {isDarkMode ? (
        <IoCart className={svgClass} />
      ) : (
        <IoCartOutline className={svgClass} />
      )}
      {user?.name && (
        <span className="absolute left-3 top-2/3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-sm text-white">
          0
        </span>
      )}
    </button>
    // </Link>
  );
}

export default CartButton;
