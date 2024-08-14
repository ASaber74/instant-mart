import Button from '../ui/Button';
import DarkModeToggle from './DarkModeToggle';
import CartButton from './CartButton';
import useUser from '../features/authentication/useUser';
import ProfilePicture from './ProfilePicture';
import { useLogout } from '../features/authentication/useLogout';
function HeaderMenu() {
  const {user} = useUser();
  const { logout, isPending } = useLogout();

  return (
    <ul className="flex items-center justify-center gap-3 max-md:hidden">
      {
        <li>
          {!user?.name ? (
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
      {user?.name && (
        <li>
          <Button
            type="primary"
            onClick={logout}
            disabled={isPending}
          >
            log out
          </Button>
        </li>
      )}
    </ul>
  );
}

export default HeaderMenu;
