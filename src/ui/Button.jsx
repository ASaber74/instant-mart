import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'md:inline-block text-sm rounded-full bg-brand-6  font-semibold uppercase hidden text-brand-0.5 transition-colors duration-300 hover:bg-brand-7 focus:bg-brand-700 focus:outline-none focus:ring focus:ring-brand-7 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-2 md:px-5 md:py-3',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary:
      'inline-block  rounded-full bg-brand-6 px-7 py-3 md:px-5 md:py-3 font-semibold uppercase  text-brand-0.5 transition-colors duration-300 hover:bg-brand-7 focus:bg-brand-700 focus:outline-none focus:ring focus:ring-brand-7 focus:ring-offset-2 disabled:cursor-not-allowed',
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
