import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link>
      <div className="flex items-center gap-1 text-xl font-bold">
        <img src="/logo.png" alt="logo" className="h-16 w-16" />
        <p className="hidden font-black capitalize tracking-widest md:block text-grey-6">
          InstantMart
        </p>
      </div>
    </Link>
  );
}

export default Logo;
