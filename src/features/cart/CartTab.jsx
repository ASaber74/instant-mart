import { BsCartCheck } from 'react-icons/bs';
import { useDarkMode } from '../../context/DarkModeContext';
import { BsCartCheckFill, BsBag, BsBagFill } from 'react-icons/bs';
import { FaXmark } from 'react-icons/fa6';
import CartItems from './CartItems';
import { formatCurrency } from '../../utils/helpers';
import { books } from '../../constants';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/ShoppingCartContext';
import { motion } from 'framer-motion';

const CartTab = () => {
  const { isDarkMode } = useDarkMode();
  const { toggleCart } = useCart();

  const slideVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'tween', duration: 0.3 } },
    exit: { x: '100%', transition: { type: 'tween', duration: 0.3 } },
  };

  const svgClass = 'w-5 h-5';

  return (
    <motion.div
      className="fixed right-0 top-0 z-10 grid h-screen w-[450px] grid-rows-[60px_1fr_180px] space-y-5 bg-grey-0.5 px-4 pt-3 text-grey-6 shadow-lg"
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <span className="cursor-pointer">
          <FaXmark className="h-6 w-6" onClick={toggleCart} />
        </span>
      </div>

      <div className='overflow-y-auto'>
        <CartItems type="tab" />
      </div>

      <div className="-mx-4 -my-3 flex flex-col bg-grey-0 px-3 pb-4">
        <div className="mb-6 mt-8 flex items-center justify-between">
          <p className="space-x-4 text-2xl font-medium">Sub Total</p>
          <span className="text-xl">{formatCurrency(books[0].price)}</span>
        </div>
        <div className="mt-auto grid grid-cols-2 gap-4">
          <button className="focus:bg-brand-700 block flex-grow rounded-2xl bg-brand-6 px-4 py-2 text-sm font-semibold uppercase text-brand-0.5 transition-colors duration-300 hover:bg-brand-7 focus:outline-none focus:ring focus:ring-brand-7 focus:ring-offset-2 disabled:cursor-not-allowed md:px-5 md:py-3">
            <Link to="/cart" onClick={toggleCart}>
              <div className="flex items-center justify-center gap-2">
                {isDarkMode ? (
                  <BsBagFill className={svgClass} />
                ) : (
                  <BsBag className={svgClass} />
                )}
                <p> View Cart </p>
              </div>
            </Link>
          </button>
          <button className="focus:bg-brand-700 block flex-grow rounded-2xl bg-brand-6 px-4 py-2 text-sm font-semibold uppercase text-brand-0.5 transition-colors duration-300 hover:bg-brand-7 focus:outline-none focus:ring focus:ring-brand-7 focus:ring-offset-2 disabled:cursor-not-allowed md:px-5 md:py-3">
            <div className="flex items-center justify-center gap-2">
              {isDarkMode ? (
                <BsCartCheckFill className={svgClass} />
              ) : (
                <BsCartCheck className={svgClass} />
              )}
              <p> Order Now </p>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartTab;
