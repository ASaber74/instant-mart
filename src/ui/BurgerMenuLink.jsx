import { Link } from 'react-router-dom';
import { useBurgerMenu } from '../context/BurgerMenuContext';
import { motion } from 'framer-motion';

function BurgerMenuLink({ href, label }) {
  const { toggleMenu } = useBurgerMenu();

  const mobileLinkVars = {
    initial: {
      y: '20vh',
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
  return (
    <motion.li variants={mobileLinkVars}>
      <Link to={href} className=" text-4xl uppercase " onClick={toggleMenu}>
        {label}
      </Link>
    </motion.li>
  );
}

export default BurgerMenuLink;
