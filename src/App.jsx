import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import AppLayout from './ui/AppLayout';
import { DarkModeProvider } from './context/DarkModeContext';
import { BurgerMenuProvider } from './context/BurgerMenuContext';
import FallbackUI from './ui/FallbackUI';
import ScrollToTop from './utils/ScrollToTop';
import { CartProvider } from './context/ShoppingCartContext';
import FAQ from './pages/FAQ';
import HowItWorks from './pages/HowItWorks';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PaymentPolicy from './pages/PaymentPolicy';

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
    <QueryClientProvider client={queryClient}>
      <BurgerMenuProvider>
        <DarkModeProvider>
          <CartProvider>
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route element={<AppLayout />}>
                  <Route
                    path="home"
                    element={
                      <Suspense
                        fallback={
                          <div className="m-auto h-screen w-full">
                            <FallbackUI />
                          </div>
                        }
                      >
                        <HomePage />
                      </Suspense>
                    }
                  />
                  <Route index element={<Navigate replace to="home" />} />
                  <Route
                    path="products"
                    element={
                      <Suspense
                        fallback={
                          <div className="m-auto h-screen w-full">
                            <FallbackUI />
                          </div>
                        }
                      >
                        <Products />
                      </Suspense>
                    }
                  />
                  <Route
                    path="products/:productId"
                    element={
                      <Suspense
                        fallback={
                          <div className="m-auto h-screen w-full">
                            <FallbackUI />
                          </div>
                        }
                      >
                        <ProductDetail />
                      </Suspense>
                    }
                  />
                  <Route
                    path="cart"
                    element={
                      <Suspense
                        fallback={
                          <div className="m-auto h-screen w-full">
                            <FallbackUI />
                          </div>
                        }
                      >
                        <Cart />
                      </Suspense>
                    }
                  />
                  <Route
                    path="account"
                    element={
                      <Suspense
                        fallback={
                          <div className="m-auto h-screen w-full">
                            <FallbackUI />
                          </div>
                        }
                      >
                        <Account />
                      </Suspense>
                    }
                  />
                  <Route
                    path="contact"
                    element={
                      <Suspense
                        fallback={
                          <div className="m-auto h-screen w-full">
                            <FallbackUI />
                          </div>
                        }
                      >
                        <Contact />
                      </Suspense>
                    }
                  />
                  <Route
                    path="about"
                    element={
                      <Suspense
                        fallback={
                          <div className="m-auto h-screen w-full">
                            <FallbackUI />
                          </div>
                        }
                      >
                        <About />
                      </Suspense>
                    }
                  />
                  <Route
                    path="faq"
                    element={
                      <Suspense
                        fallback={
                          <div className="m-auto h-screen w-full">
                            <FallbackUI />
                          </div>
                        }
                      >
                        <FAQ />
                      </Suspense>
                    }
                  />
                  <Route
                    path="how-it-works"
                    element={
                      <Suspense
                        fallback={
                          <div className="m-auto h-screen w-full">
                            <FallbackUI />
                          </div>
                        }
                      >
                        <HowItWorks />
                      </Suspense>
                    }
                  />
                  <Route
                    path="privacy-policy"
                    element={
                      <Suspense
                        fallback={
                          <div className="m-auto h-screen w-full">
                            <FallbackUI />
                          </div>
                        }
                      >
                        <PrivacyPolicy />
                      </Suspense>
                    }
                  />
                  <Route
                    path="payment-policy"
                    element={
                      <Suspense
                        fallback={
                          <div className="m-auto h-screen w-full">
                            <FallbackUI />
                          </div>
                        }
                      >
                        <PaymentPolicy />
                      </Suspense>
                    }
                  />
                  <Route
                    path="login"
                    element={
                      <Suspense
                        fallback={
                          <div className="m-auto h-screen w-full">
                            <FallbackUI />
                          </div>
                        }
                      >
                        <Login />
                      </Suspense>
                    }
                  />
                  <Route
                    path="signup"
                    element={
                      <Suspense
                        fallback={
                          <div className="m-auto h-screen w-full">
                            <FallbackUI />
                          </div>
                        }
                      >
                        <SignUp />
                      </Suspense>
                    }
                  />
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
          </CartProvider>
        </DarkModeProvider>
      </BurgerMenuProvider>
    </QueryClientProvider>
  );
}

export default App;
