import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartTab from '../features/cart/CartTab';
import { useCart } from '../context/ShoppingCartContext';
import { AnimatePresence } from 'framer-motion';

function AppLayout() {
  const { isCartOpen } = useCart();
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className=" z-0 flex  flex-grow flex-col bg-grey-0.5 text-grey-6">
        <Outlet />
      </main>

      <Footer />

      <AnimatePresence>
      {isCartOpen && <CartTab />}
    </AnimatePresence>
    </div>
  );
}

export default AppLayout;
