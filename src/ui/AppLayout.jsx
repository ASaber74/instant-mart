import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <>
      <Header />

      <main className=" z-0 flex  flex-col bg-grey-0.5">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;
