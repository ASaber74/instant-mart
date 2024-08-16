import CartItems from '../features/cart/CartItems';

function Cart() {
  return (
    <section className="my-10">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold">SHOPPING CART</h1>
      </div>
      <CartItems type="page" />
    </section>
  );
}

export default Cart;
