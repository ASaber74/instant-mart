import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import AppLayout from './ui/AppLayout';
import { DarkModeProvider } from './context/DarkModeContext';
import { BurgerMenuProvider } from './context/BurgerMenuContext';
import LoadingSpinner from './ui/LoadingSpinner';
import FallbackUI from './ui/FallbackUI';

// Lazy load components
const HomePage = React.lazy(() => import('./pages/HomePage'));
const Products = React.lazy(() => import('./pages/Products'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Account = React.lazy(() => import('./pages/Account'));
const Login = React.lazy(() => import('./pages/Login'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));
const About = React.lazy(() => import('./pages/About'));

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
                <Route
                  path="home"
                  element={
                    <Suspense
                      fallback={
                        <div className='h-screen m-auto w-full'>
                          <FallbackUI />
                        </div>
                      }
                    >
                      <HomePage />
                    </Suspense>
                  }
                />
                <Route index element={<Navigate replace to="home" />} />
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
                color: '#1f2937',
              },
            }}
          />
        </QueryClientProvider>
      </DarkModeProvider>
    </BurgerMenuProvider>
  );
}

export default App;
