import instance from '../../axios';

export async function getProducts() {
  try {
    const res = await instance.get('/products');
    console.log(res.data);
  } catch (error) {
    throw new Error(`Error during request: ${error.message}`);
  }
  getProducts();
}
