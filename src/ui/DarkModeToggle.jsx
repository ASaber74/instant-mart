import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import { useDarkMode } from '../context/DarkModeContext';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const svgClass = 'w-6 h-6';
  return (
    <button
      aria-label="Light mode button"
      onClick={toggleDarkMode}
      className="mt-[4px] hidden rounded-full border-transparent  bg-none p-1 transition duration-200 ease-in-out hover:bg-grey-2 md:block"
    >
      {isDarkMode ? (
        <HiOutlineSun className={svgClass} />
      ) : (
        <HiOutlineMoon className={svgClass} />
      )}
    </button>
  );
}

export default DarkModeToggle;
