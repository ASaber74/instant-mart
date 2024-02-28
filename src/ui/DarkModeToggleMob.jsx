import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import { useDarkMode } from '../context/DarkModeContext';

function DarkModeToggleMob() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const svgClass = 'w-10 h-10 text-text-100';
  return (
    <button
      onClick={toggleDarkMode}
      className="hover:bg-bg-300 mt-[4px]  rounded-full  border-transparent bg-none p-1 transition duration-200 ease-in-out"
    >
      {isDarkMode ? (
        <HiOutlineSun className={svgClass} />
      ) : (
        <HiOutlineMoon className={svgClass} />
      )}
    </button>
  );
}

export default DarkModeToggleMob;
