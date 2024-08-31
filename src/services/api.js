import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
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

export const getProfiles = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/profile/allprofiles`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.users;
  } catch (error) {
    throw new Error(error.response?.data?.msg || 'Error fetching profiles');
  }
};
