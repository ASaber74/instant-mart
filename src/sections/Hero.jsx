import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
      <div className="relative w-full overflow-hidden shadow-xl sm:max-h-[60vh]">
        <img
          src="..\images\hero.jpg"
          loading="lazy"
          alt="Background"
          className="h-[60vh]  w-full object-cover object-center"
        />
        <div className="hero-opacity absolute inset-0 bg-black"></div>

        <div className=" absolute  left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col space-y-2  text-white max-sm:min-w-72 max-sm:gap-0.5">
          <h1 className="text-xl font-semibold tracking-tight sm:text-3xl  lg:mt-7 xl:text-5xl ">
            Unlock the Magic of <span className="text-brand-6">Reading</span>
          </h1>
          <br className="hidden lg:flex" />
          <h2 className="text-lg  font-normal tracking-tight  sm:text-xl md:text-xl xl:text-3xl">
            Where Every Page Holds a New Adventure
          </h2>
          <p className="sm:text-md  max-w-xl text-sm leading-5  text-hero-text md:text-lg md:leading-8 xl:max-w-2xl ">
            Welcome to InstantMart, your haven for book lovers and avid readers
            alike.
            <span className="">
              Dive into a world where imagination knows no bounds and every book
              is a portal to new experiences. From timeless classics to the
              latest bestsellers, our curated collection awaits your discovery.
            </span>
          </p>

          <Link to="/products">
            <button className=" group flex w-[150px] items-center justify-center gap-1 rounded-full bg-brand-6 px-2 py-1 text-sm font-semibold uppercase text-brand-0.5 transition-colors duration-300 hover:bg-brand-7 hover:text-brand-0.5 focus:bg-brand-7 focus:outline-none focus:ring focus:ring-brand-7 focus:ring-offset-2 disabled:cursor-not-allowed sm:mt-3 sm:gap-2 sm:px-3 sm:py-2">
              Explore Now
              <HiArrowLongRight className="transform transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
