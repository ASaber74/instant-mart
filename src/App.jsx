import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import HomePage from './pages/HomePage';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import { DarkModeProvider } from './context/DarkModeContext';
import About from './pages/About';
import { BurgerMenuProvider } from './context/BurgerMenuContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <BurgerMenuProvider>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="home" />} />
                <Route path="home" element={<HomePage />} />
                <Route path="products" element={<Products />} />
                <Route path="products/:productId" element={<ProductDetail />} />
                <Route path="cart" element={<Cart />} />
                <Route path="account" element={<Account />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: '8px' }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: '16px',
                maxWidth: '500px',
                padding: '16px 24px',
                backgroundColor: '#f9fafb',
                color: '##1f2937',
              },
            }}
          />
        </QueryClientProvider>
      </DarkModeProvider>
    </BurgerMenuProvider>
  );
}

export default App;
