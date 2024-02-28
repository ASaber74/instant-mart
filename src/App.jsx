import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <BurgerMenuProvider>
      <DarkModeProvider>
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
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </BurgerMenuProvider>
  );
}

export default App;
