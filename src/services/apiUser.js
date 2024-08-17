import instance from "../../axios";

export async function updateUser(userId, userData) {
  try {
    const formData = new FormData();
    
    if (userData.photo) {
      formData.append('photo', userData.photo);
    }
    if (userData.name) {
      formData.append('name', userData.name);
    }
    if (userData.email) {
      formData.append('email', userData.email);
    }
    if (userData.password) {
      formData.append('password', userData.password);
    }

    const response = await instance.patch(
      `api/v1/users/${userId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}