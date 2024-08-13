import { useState } from 'react';
import { books } from '../constants';
import { BsCartCheck } from 'react-icons/bs';
import QuantitySelector from '../ui/QuantitySelector';
import { formatCurrency } from '../utils/helpers';

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <section className="my-10">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold">SHOPPING CART</h1>
      </div>
      <div className="mx-20 overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-b-grey-5">
              <th className="px-6 py-3 text-left font-medium uppercase text-grey-5">
                Product
              </th>
              <th className="px-6 py-3 text-left font-medium uppercase text-grey-5">
                Price
              </th>
              <th className="px-6 py-3 text-left font-medium uppercase text-grey-5">
                Quantity
              </th>
              <th className="px-6 py-3 text-left font-medium uppercase text-grey-5">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-b-grey-5">
              <td className="flex items-center space-x-4 px-6 py-4">
                <img
                  src={books[0].imageUrl}
                  alt={books[0].name}
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div className="space-y-0.5">
                  <p className="text-lg font-bold">{books[0].name}</p>
                  <p className="text-grey-4">Author: {books[0].author}</p>
                  <p className="text-grey-4">Genre: {books[0].genre}</p>
                  <button className="text-sm text-red-500">Remove</button>
                </div>
              </td>
              <td className="px-6 py-4">{formatCurrency(books[0].price)}</td>
              <td className="max-w-[100px] px-6 py-4">
                <QuantitySelector onChange={handleQuantityChange} />
              </td>
              <td className="px-6 py-4">
                {formatCurrency(quantity * books[0].price)}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6 flex  items-center justify-end gap-16">
          <p className="space-x-4 text-2xl font-medium">Sub Total</p>
          <span className="text-xl">
            {formatCurrency(quantity * books[0].price)}
          </span>
        </div>
        <button className="focus:bg-brand-700 ml-auto mt-6 block  w-48 flex-grow rounded-2xl bg-brand-6 px-4 py-2 text-sm font-semibold uppercase  text-brand-0.5 transition-colors  duration-300 hover:bg-brand-7 focus:outline-none focus:ring focus:ring-brand-7 focus:ring-offset-2 disabled:cursor-not-allowed md:px-5 md:py-3">
          <div className="flex items-center justify-center gap-2">
            <BsCartCheck className={'h-5 w-5'} />
            <p> Order Now</p>
          </div>
        </button>
      </div>
    </section>
  );
}

export default Cart;
