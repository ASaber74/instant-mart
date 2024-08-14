import instance from '../../axios';

export async function getBooks() {
  try {
    const res = await instance.get('/books?sort=price');
    console.log(res)
    return res?.data?.data?.books || null;
  } catch (error) {
    throw new Error(`Error during request: ${error.message}`);
  }
}
