import SearchProduct from './SearchProduct';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import Navbar from './Navbar';
import BurgerMenu from './BurgerMenu';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 10) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });
  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={isHidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="relative w-full"
    >
      <Navbar>
        <Logo />
        <SearchProduct />
        <HeaderMenu />
        <BurgerMenu />
      </Navbar>
    </motion.header>
  );
}

export default Header;
