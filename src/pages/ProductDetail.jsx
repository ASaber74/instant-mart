import { useParams } from 'react-router-dom';
import { books } from '../constants';
import { useState } from 'react';
import QuantitySelector from '../ui/QuantitySelector';
import { formatCurrency } from '../utils/helpers';

function ProductDetail() {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = books.find((book) => book.id === parseInt(productId));

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <section className="md:mx-32">
      <div className="m-16 mb-0 flex flex-col gap-16 border-b-2 border-b-grey-4 pb-5 md:flex-row">
        <img
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height="auto"
          className="h-auto max-h-[500px] rounded-lg object-cover shadow-2xl"
        />
        <div className="mt-2 flex flex-grow flex-col gap-5">
          <h1 className="text-3xl font-bold text-brand-6">{product.name}</h1>
          <div className="max-md:mr-auto flex flex-col items-center justify-between gap-5 md:flex-row md:gap-0">
            <p className="text-xl max-md:mr-auto">
              Author: <span className="font-bold">{product.author}</span>{' '}
            </p>
            <p className="max-md:mr-auto">Published: {product.publishDate}</p>
          </div>
          <p className="text-xl">Pages: {product.pageCount}</p>
          <p className="text-xl">Genre: {product.genre}</p>
          <p className="text-xl">
            <span className="font-bold">ISBN: </span> {product.isbn}
          </p>
          <p className="text-xl">
            Price:{' '}
            <span className="font-bold text-brand-6">
              {' '}
              {formatCurrency(quantity * product.price)}{' '}
            </span>
          </p>
          <div className="flex items-center gap-4">
            <QuantitySelector onChange={handleQuantityChange} />
            <button className="focus:bg-brand-700 flex-grow rounded-2xl bg-brand-6 px-4 py-2 text-sm font-semibold uppercase  text-brand-0.5 transition-colors  duration-300 hover:bg-brand-7 focus:outline-none focus:ring focus:ring-brand-7 focus:ring-offset-2 disabled:cursor-not-allowed md:inline-block md:px-5 md:py-3">
              Add to cart
            </button>{' '}
          </div>
        </div>
      </div>

      <div className="mx-16 my-8 flex w-full flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold">Product description</h1>
          <p className="w-2/3 py-3 text-lg text-grey-4">
            {product.description}
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-bold">Shipping & Return</h1>
          <p className="w-2/3 py-3 text-lg leading-8 text-grey-4">
            Shipping cost is based on the city. Just add products to your cart
            and use the Shipping Calculator to see the shipping price.
            <br />
            We want you to be 100% satisfied with your purchase. Items can be
            returned or exchanged within 14 days of delivery without open the
            box.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
