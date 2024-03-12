import Button from '../ui/Button';
import DarkModeToggle from './DarkModeToggle';
import CartButton from './CartButton';
import useUser from '../features/authentication/useUser';
import ProfilePicture from './ProfilePicture';
function HeaderMenu() {
  const user = useUser();
  console.log(user.name)
  return (
    <ul className="flex items-center justify-center gap-3 max-md:hidden">
      {
        <li>
          {user.name ? (
            <Button type="primary" to="/login">
              Sign in
            </Button>
          ) : (
            <ProfilePicture />
          )}
        </li>
      }
      <li>
        <CartButton />
      </li>

      <li>
        <DarkModeToggle />
      </li>
    </ul>
  );
}

export default HeaderMenu;
