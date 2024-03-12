import instance from '../../axios';

export async function signup({ name, email, password, confirmPassword }) {
  try {
    console.log(name, email, password, confirmPassword);
    const res = await instance.post('/users/signup', {
      name,
      email,
      password,
      confirmPassword,
    });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function login({ email, password }) {
  try {
    const res = await instance.post('/users/login', { email, password });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function getUser() {
  try {
    const res = await instance.get('/users/65e1c11da53f24ddc936f0e2');
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
