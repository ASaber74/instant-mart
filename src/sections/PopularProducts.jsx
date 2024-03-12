import PopularProductsCard from '../ui/PopularProductsCard';
import { books } from '../constants/index';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function PopularProducts() {
  return (
    //max-sm:mt-12
    // md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2
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
              className="flex gap-1 text-brand-6 transition-all duration-300 hover:gap-2 max-xs:hidden lg:m-2"
              aria-label="Browse popular products"
            >
              <div>Browse</div>
              <span>&rarr;</span>
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
          <PopularProductsCard key={index} {...book} />
        ))}
      </div>
    </motion.div>
  );
}

export default PopularProducts;
