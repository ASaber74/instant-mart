import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useBurgerMenu } from '../context/BurgerMenuContext';

function AppLayout() {
  const { isOpen } = useBurgerMenu();
  return (
    <>
      <div className={` ${isOpen && 'overflow-hidden'}`}>
        <Header />

        <div className=" flex  bg-grey-0.5">
          <main className="mx-auto  max-w-3xl">
            <Outlet />
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
