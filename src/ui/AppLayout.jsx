import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
// import CartTab from '../features/cart/CartTab';

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className=" z-0 flex  flex-grow flex-col bg-grey-0.5 text-grey-6">
        <Outlet />
      </main>

      <Footer />
      {/* <CartTab /> */}
    </div>
  );
}

export default AppLayout;
