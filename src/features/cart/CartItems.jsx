import React from 'react';
import { BsCartCheck } from 'react-icons/bs';
import QuantitySelector from '../../ui/QuantitySelector';
import { formatCurrency } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/ShoppingCartContext';

const CartItems = ({ type }) => {
  const {
    cartItems,
    removeItemFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    closeCart,
    totalItems,
    totalPrice,
  } = useCart();

  const handleQuantityChange = (id, newQuantity, currentQuantity) => {
    const quantityDifference = newQuantity - currentQuantity;

    if (quantityDifference > 0) {
      for (let i = 0; i < quantityDifference; i++) {
        increaseItemQuantity(id);
      }
    } else {
      for (let i = 0; i < Math.abs(quantityDifference); i++) {
        decreaseItemQuantity(id);
      }
    }
  };

  if (type === 'page') {
    return (
      <div className="mx-20 overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-b-grey-5">
              <th className="w-1/4 px-6 py-3 text-left font-medium uppercase text-grey-5">
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
                    <button
                      className="text-sm text-red-500"
                      onClick={() => removeItemFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4">{formatCurrency(item.price)}</td>
                <td className="max-w-[100px] px-6 py-4">
                  <QuantitySelector
                    value={item.quantity}
                    onChange={(newQuantity) =>
                      handleQuantityChange(item.id, newQuantity, item.quantity)
                    }
                  />
                </td>
                <td className="px-6 py-4">
                  {formatCurrency(item.price * item.quantity)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 flex items-center justify-end gap-16">
          <p className="text-2xl font-medium">
            Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})
          </p>
          <span className="text-xl">{formatCurrency(totalPrice)}</span>
        </div>
        <button className="focus:bg-brand-700 ml-auto mt-6 block w-48 rounded-2xl bg-brand-6 px-4 py-2 text-sm font-semibold uppercase text-brand-0.5 transition-colors duration-300 hover:bg-brand-7 focus:outline-none focus:ring focus:ring-brand-7 focus:ring-offset-2 disabled:cursor-not-allowed md:px-5 md:py-3">
          <div className="flex items-center justify-center gap-2">
            <BsCartCheck className="h-5 w-5" />
            <p>Order Now</p>
          </div>
        </button>
      </div>
    );
  }

  if (type === 'tab') {
    return (
      <div className="space-y-10">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 border-b border-grey-3 pb-4 last:border-b-0"
          >
            <Link to={`/products/${item.id}`} onClick={closeCart}>
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
                {formatCurrency(item.price)}
              </p>
              <div className="mr-auto flex items-center justify-start gap-4 pt-1">
                <QuantitySelector
                  value={item.quantity}
                  onChange={(newQuantity) =>
                    handleQuantityChange(item.id, newQuantity, item.quantity)
                  }
                />
                <button
                  className="text-sm text-red-500"
                  onClick={() => removeItemFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default CartItems;
