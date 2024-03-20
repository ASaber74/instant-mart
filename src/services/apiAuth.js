import instance from '../../axios';

export async function signup({ name, email, password, confirmPassword }) {
  try {
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

export async function getCurrentUser() {
  try {
    const res = await instance.get('/users/current-user');
    return res?.data?.user;
  } catch (error) {
    if (error.response.status === 401) return { user: null };

    // throw new Error(error.response.data.message);
  }
}

export async function logout() {
  try {
    const res = await instance.post('/users/logout');
    return res;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
