import { HiStar } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/helpers';
import { useCart } from '../context/ShoppingCartContext';
import useUser from '../features/authentication/useUser';
import toast from 'react-hot-toast';

function PopularProductsCard({ book }) {
  const { addItemToCart, openCart, isCartOpen } = useCart();
  const { user } = useUser();

  const handleAddToCart = (book) => {
    if (!user) return toast.error('Please login first to add to cart');
    addItemToCart(book);
    if (!isCartOpen) {
      openCart();
    }
    console.log('clicked');
  };

  return (
    <>
      <div className=" flex  w-[285px] flex-col overflow-hidden rounded-lg bg-grey-1 shadow-2xl ">
        <Link to={`/products/${book.id}`} className="cursor-pointer">
          <img
            loading="lazy"
            src={book.imageUrl}
            alt={book.name}
            height={285}
            width={320}
            className="  h-[285px] cursor-pointer object-cover transition-transform duration-300 hover:rotate-1 hover:scale-110"
          />
          <div className="px-4">
            <div className="mt-8 flex  items-center gap-2.5 ">
              <div className="text-yellow-500">
                <HiStar />
              </div>
              <p className="text-xl leading-normal text-grey-6">(4.5)</p>
            </div>
            <h1 className="mt-2 min-h-[64px] cursor-pointer text-xl leading-normal text-grey-6 hover:text-grey-4">
              {book.name}
            </h1>
            <p className=" mb-4 mt-2 text-2xl font-semibold leading-normal text-brand-6 ">
              {formatCurrency(book.price)}
            </p>
          </div>
        </Link>
        <button
          onClick={() => handleAddToCart(book)}
          className="focus:bg-brand-700  m-2 mt-auto rounded-2xl bg-brand-6 px-4 py-2 text-sm font-semibold uppercase  text-brand-0.5 transition-colors  duration-300 hover:bg-brand-7 focus:outline-none focus:ring focus:ring-brand-7 focus:ring-offset-2 disabled:cursor-not-allowed md:inline-block md:px-5 md:py-3"
        >
          Add to cart
        </button>
      </div>
    </>
  );
}

export default PopularProductsCard;
