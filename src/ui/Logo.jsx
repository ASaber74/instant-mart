import { Link } from 'react-router-dom';

function Logo({ type }) {
  if (type === 'header') {
    return (
      <Link to="/home">
        <div className="flex items-center gap-3 text-xl font-bold">
          <img
            loading="lazy"
            src="..\icons\logo.svg"
            alt="logo"
            width={32}
            height={32}
          />

          <p className="hidden text-2xl font-black capitalize tracking-[-.075em] text-grey-6 md:block">
            <span className="text-3xl text-brand-6">I</span>nstant
            <span className="text-3xl text-brand-6">M</span>art
          </p>
        </div>
      </Link>
    );
  }
  return (
    <Link to="/home">
      <div className="flex items-center gap-3 text-xl font-bold">
        <img
          loading="lazy"
          src="..\icons\logo.svg"
          alt="logo"
          width={32}
          height={32}
        />

        <p className=" text-2xl font-black capitalize tracking-[-.075em] text-grey-6 md:block">
          <span className="text-3xl text-brand-6">I</span>nstant
          <span className="text-3xl text-brand-6">M</span>art
        </p>
      </div>
    </Link>
  );
}

export default Logo;
