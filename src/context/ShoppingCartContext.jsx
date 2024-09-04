import React, { createContext, useContext, useState, useEffect } from 'react';
import useUser from '../features/authentication/useUser';
import useUpdateCart from '../features/cart/useUpdateCart';
import useRemoveFromCart from '../features/cart/useRemoveFromCart';

const CartContext = createContext();

export function CartProvider({ children }) {
  const { isLoading, user } = useUser();
  const { isLoading: isUpdating, updateCart } = useUpdateCart();
  const { isLoading: isRemoving, removeCart } = useRemoveFromCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const cartItems = user?.cart || [];

  const addItemToCart = (item) => {
    updateCart({ bookId: item._id });
    // setCartItems((prevItems) => {
    //   const itemExists = prevItems.find((cartItem) => cartItem.id === item.id);

    //   if (itemExists) {
    //     return prevItems.map((cartItem) =>
    //       cartItem.id === item.id
    //         ? { ...cartItem, quantity: cartItem.quantity + 1 }
    //         : cartItem,
    //     );
    //   }
    //   return [...prevItems, { ...item, quantity: 1 }];
    // });
  };

  const removeItemFromCart = (id) => {
    removeCart({ bookId: id });
    // setCartItems((prevItems) =>
    //   prevItems.filter((cartItem) => cartItem.id !== id),
    // );
  };

  const increaseItemQuantity = (id) => {
    updateCart({ bookId: id, count: 1 });

    // setCartItems((prevItems) =>
    //   prevItems.map((cartItem) =>
    //     cartItem.id === id
    //       ? { ...cartItem, quantity: cartItem.quantity + 1 }
    //       : cartItem,
    //   ),
    // );
  };

  const decreaseItemQuantity = (id) => {
    updateCart({ bookId: id, count: -1 });

    // setCartItems((prevItems) =>
    //   prevItems.map((cartItem) =>
    //     cartItem.id === id
    //       ? { ...cartItem, quantity: cartItem.quantity - 1 }
    //       : cartItem,
    //   ),
    // );
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  useEffect(() => {
    const totalItems = cartItems.reduce((acc, item) => acc + item.count, 0);
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.book.price * item.count,
      0,
    );

    setTotalItems(totalItems);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        isCartOpen,
        toggleCart,
        openCart,
        closeCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
