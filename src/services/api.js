import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1/auth';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    if (response.data.token) {
      return response.data.token;
    } else {
      throw new Error('Login failed.');
    }
  } catch (error) {
    throw new Error(error.response?.data?.msg || 'Error during login');
  }
};
