import React, { useState } from 'react';
import { BsCartCheck } from 'react-icons/bs';
import QuantitySelector from '../../ui/QuantitySelector';
import { formatCurrency } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/ShoppingCartContext';

const CartItems = ({ type }) => {
  const { cartItems, removeItemFromCart } = useCart();
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = item.quantity || 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, newQuantity) => {
    setQuantities({
      ...quantities,
      [id]: newQuantity,
    });
  };

  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.price * quantities[item.id], 0);

  if (type === 'page') {
    return (
      <div className="mx-20 overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-b-grey-5">
              <th className="text-grey- w-1/4 px-6 py-3 text-left font-medium uppercase">
                Product
              </th>
              <th className="w-1/4 px-6 py-3 text-left font-medium uppercase text-grey-5">
                Price
              </th>
              <th className="w-1/4 px-6 py-3 text-left font-medium uppercase text-grey-5">
                Quantity
              </th>
              <th className="w-1/4 px-6 py-3 text-left font-medium uppercase text-grey-5">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b border-b-grey-5">
                <td className="flex items-center space-x-4 px-6 py-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <div className="space-y-0.5">
                    <p className="text-lg font-bold">{item.name}</p>
                    <p className="text-grey-4">Author: {item.author}</p>
                    <p className="text-grey-4">Genre: {item.genre}</p>
                    <button className="text-sm text-red-500" onClick={() =>removeItemFromCart(item.id)}>Remove</button>
                  </div>
                </td>
                <td className="px-6 py-4">{formatCurrency(item.price)}</td>
                <td className="max-w-[100px] px-6 py-4">
                  <QuantitySelector
                    value={quantities[item.id]}
                    onChange={(newQuantity) =>
                      handleQuantityChange(item.id, newQuantity)
                    }
                  />
                </td>
                <td className="px-6 py-4">
                  {formatCurrency(quantities[item.id] * item.price)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 flex items-center justify-end gap-16">
          <p className="space-x-4 text-2xl font-medium">Sub Total</p>
          <span className="text-xl">
            {formatCurrency(calculateTotal(cartItems))}
          </span>
        </div>
        <button className="focus:bg-brand-700 ml-auto mt-6 block w-48 flex-grow rounded-2xl bg-brand-6 px-4 py-2 text-sm font-semibold uppercase text-brand-0.5 transition-colors duration-300 hover:bg-brand-7 focus:outline-none focus:ring focus:ring-brand-7 focus:ring-offset-2 disabled:cursor-not-allowed md:px-5 md:py-3">
          <div className="flex items-center justify-center gap-2">
            <BsCartCheck className={'h-5 w-5'} />
            <p> Order Now</p>
          </div>
        </button>
      </div>
    );
  }

  if (type === 'tab') {
    return (
      <div className="space-y-10">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4">
            <Link to={`/products/${item.id}`}>
              <img
                src={item.imageUrl}
                alt={item.name}
                className="h-24 w-24 rounded-lg object-cover"
              />
            </Link>
            <div className="space-y-0.5">
              <p className="text-lg font-bold">{item.name}</p>
              <p className="text-grey-4">Author: {item.author}</p>
              <p className="text-grey-4">Genre: {item.genre}</p>
              <p className="font-bold text-grey-4">
                {formatCurrency(quantities[item.id] * item.price)}
              </p>
              <div className="flex items-center justify-center gap-4 pt-1">
                <QuantitySelector
                  value={quantities[item.id]}
                  onChange={(newQuantity) =>
                    handleQuantityChange(item.id, newQuantity)
                  }
                />
                <button className="text-sm text-red-500" onClick={() => removeItemFromCart(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

};

export default CartItems;
