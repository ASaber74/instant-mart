import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import DarkModeToggle from './DarkModeToggle';
import CartButton from './CartButton';
import BurgerMenuIcon from './BurgerMenuIcon';

function HeaderMenu() {
  return (
    <ul className="flex items-center justify-center gap-3">
      <li>
        <Button type="primary" to="/login">
          Sign in
        </Button>
        {/* <Link to="/login">
          <button className="focus:shadow-outline text-brand-0.5 bg-brand-6 hover:bg-brand-7 hidden rounded-full px-4 py-2 font-semibold shadow-sm focus:outline-none md:block">
            Sign In
          </button>
        </Link> */}
      </li>
      <li>
        <CartButton />
      </li>
      <BurgerMenuIcon />
      <li>
        <DarkModeToggle />
      </li>
    </ul>
  );
}

export default HeaderMenu;
