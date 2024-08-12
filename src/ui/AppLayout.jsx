import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className=" z-0 flex  flex-col bg-grey-0.5 flex-grow text-grey-6">
        <Outlet />
      </main>

      <Footer/>
    </div>
  );
}

export default AppLayout;
