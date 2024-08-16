import PopularProductsCard from '../ui/PopularProductsCard';
import { books } from '../constants/index';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowLongRight } from 'react-icons/hi2';

function PopularProducts() {
  return (
    <motion.div
      className="max-container "
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div className="flex flex-1 flex-col justify-start gap-5">
        <div className="flex justify-between font-bold">
          <h1 className=" text-4xl text-grey-6">
            Our <span className="text-brand-6">Popular</span> Books
          </h1>
          <Link to="/products" aria-label="Browse popular products">
            <button
              className="group flex items-center justify-center gap-3 rounded-md p-3 text-brand-6 hover:bg-brand-6 hover:text-brand-0.5 hover:rounded-full focus:outline-none focus:ring-2 focus:ring-brand-6 focus:ring-offset-2 max-xs:hidden lg:m-2"
              aria-label="Browse popular products"
            >
              <p className="text-lg">Browse</p>
              <HiArrowLongRight className="mt-[2px] transform transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
        <p className="text-md mt-2 leading-5 text-grey-4 lg:max-w-lg lg:leading-8">
          Discover our bestselling books that capture hearts and minds. From
          thrilling adventures to heartfelt stories, find your next page-turner
          among our most sought-after titles.
        </p>
        <Link to="products" aria-label="Browse popular products">
          <button
            className="hidden text-brand-6 max-xs:flex"
            aria-label="Browse popular products"
          >
            Browse &rarr;
          </button>
        </Link>
      </div>
      <div className="mt-16 grid  grid-cols-card place-items-center gap-4  sm:gap-6">
        {books.map((book, index) => (
          <PopularProductsCard key={index} book={book} />
        ))}
      </div>
    </motion.div>
  );
}

export default PopularProducts;
