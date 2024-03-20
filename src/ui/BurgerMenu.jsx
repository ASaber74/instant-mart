import { useBurgerMenu } from '../context/BurgerMenuContext';
import { AnimatePresence, motion } from 'framer-motion';
import DarkModeToggleMob from './DarkModeToggleMob';
import BurgerMenuLink from './BurgerMenuLink';
import Button from './Button';
import useUser from '../features/authentication/useUser';
import { MdClose } from 'react-icons/md';

function BurgerMenu() {
  const { isOpen, toggleMenu } = useBurgerMenu();
  const user = useUser();
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: '30vh',
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const menuLinks = [
    { href: '/', label: 'Home' },
    { href: '/account', label: 'Account' },
    { href: '/cart', label: 'Cart' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="z-90 absolute inset-0 h-screen w-screen origin-top bg-grey-0.5 text-grey-6"
        >
          <div className="flex h-full flex-col gap-20 p-7">
            <div className="flex justify-between">
              <h1 className="mt-3 text-xl font-black tracking-widest">
                InstantMart
              </h1>
              <button
                className="z-50  mt-[4px] rounded-full  border-transparent bg-none p-1 transition duration-200 ease-in-out hover:bg-grey-2 md:hidden "
                onClick={toggleMenu}
                aria-label="open menu"
              >
                <MdClose className="h-6 w-6  " />
              </button>
            </div>
            <motion.ul
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="  flex flex-col items-center  justify-center gap-9 "
            >
              {menuLinks.map((link) => (
                <BurgerMenuLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                />
              ))}

              <motion.li
                variants={mobileLinkVars}
                initial="initial"
                animate="open"
              >
                {!user?.user?.name ? (
                  <Button to="/login" type="secondary">
                    Sign in
                  </Button>
                ) : (
                  <Button to="/" type="secondary">
                    Log out
                  </Button>
                )}
              </motion.li>
            </motion.ul>

            <motion.div
              variants={mobileLinkVars}
              initial="initial"
              animate="open"
              className="absolute bottom-5 right-5 text-grey-6"
            >
              <DarkModeToggleMob />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BurgerMenu;
