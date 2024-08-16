import { useDarkMode } from '../context/DarkModeContext';
import { useCart } from '../context/ShoppingCartContext';
import CartItems from '../features/cart/CartItems';
import { BsCartPlus, BsCartPlusFill } from 'react-icons/bs';

function Cart() {
  const { cartItems } = useCart();
  const { isDarkMode } = useDarkMode();

  return (
    <section className="my-10">
      {cartItems.length !== 0 ? (
        <>
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold">SHOPPING CART</h1>
          </div>
          <CartItems type="page" />
        </>
      ) : (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-2">
          {isDarkMode ? (
            <BsCartPlus className="mb-4 text-7xl text-grey-4" />
          ) : (
            <BsCartPlusFill className="mb-4 text-7xl text-grey-4" />
          )}
          <p className="text-3xl font-medium text-grey-5">Your cart is empty</p>
          <p className="text-xl text-grey-4">Add items to start shopping!</p>
        </div>
      )}
    </section>
  );
}

export default Cart;
