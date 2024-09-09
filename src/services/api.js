import axios from "axios";
import { getCredentials } from "../util";

const API_URL = "http://localhost:8000/api/v1";
axios.defaults.headers.common["Authorization"] = `Bearer ${getCredentials().token}`;

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });

    if (response.data.token) {
      return response.data;
    } else {
      throw new Error("Login failed.");
    }
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Error during login");
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
    throw new Error(error.response?.data?.msg || "Error fetching profiles");
  }
};

export const sendPasswordResetLink = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/auth/forgot-password`, {
      email,
    });

    if (response.status === 200) {
      return {
        success: true,
        message: "Reset Link has been sent to your email.",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "An error occurred. Please try again",
    };
  }
};

export const resetPassword = async (token, id, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/reset-password/${id}/${token}`, {
      password,
    });

    if (response.status === 200) {
      return {
        success: true,
        message: "Password successfully reset. Redirecting to login...",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "An error occurred. Please try agian.",
    };
  }
};

export const logOut = async (token) => {
  try {
    const response = await axios.post(`${API_URL}/auth/logout`);
    

    console.log(response);
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Error Logout");
  }
};
