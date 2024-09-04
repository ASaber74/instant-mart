import instance from '../../axios';

export async function addToCart({ bookId, count }) {
  await instance.patch('/cart', { book: bookId, count });
}

export async function removeFromCart({ bookId }) {
  await instance.delete(`/cart/${bookId}`);
}
