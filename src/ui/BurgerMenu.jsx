import { useBurgerMenu } from '../context/BurgerMenuContext';
import { AnimatePresence, motion } from 'framer-motion';
import DarkModeToggleMob from './DarkModeToggleMob';
import BurgerMenuLink from './BurgerMenuLink';
import Button from './Button';

function BurgerMenu() {
  const { isOpen } = useBurgerMenu();
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
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: '30vh',
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
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
          className="bg-grey-0.5 text-grey-6 fixed left-0 top-0 z-40 h-screen w-screen origin-top  overscroll-none"
        >
          <div className="flex h-full flex-col p-7">
            <div className="flex justify-between">
              <h1 className="mt-3 text-xl font-black tracking-widest">
                InstantMart
              </h1>
            </div>
            <motion.ul
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex h-full flex-col items-center justify-center gap-10  "
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
                <Button to="/login" type="secondary">
                  Sign in
                </Button>
                {/* <Link to="/login">
                  <button className="focus:shadow-outline bg-brand-6 text-brand-0.5 hover:bg-brand-7 rounded-full   px-10 py-4 text-2xl font-semibold  focus:outline-none">
                    Sign In
                    </button>
                  </Link> */}
              </motion.li>
            </motion.ul>

            <motion.div
              variants={mobileLinkVars}
              initial="initial"
              animate="open"
              className="text-grey-6 absolute bottom-5 right-5"
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
