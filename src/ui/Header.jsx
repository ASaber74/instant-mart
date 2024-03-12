import SearchProduct from './SearchProduct';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import Navbar from './Navbar';
import BurgerMenu from './BurgerMenu';
import BurgerMenuIcon from './BurgerMenuIcon';

function Header({}) {
  return (
    <header className=" sticky top-0 z-10 w-full border-b border-grey-1 bg-grey-0 p-4">
      <Navbar>
        <Logo type="header" />
        <SearchProduct />
        <HeaderMenu />
        <BurgerMenuIcon />
      </Navbar>
        <BurgerMenu />
    </header>
  );
}

export default Header;
