import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = import.meta.env.VITE_BASE_URL;

/* ============ */
/* === AUTH === */
/* ============ */
export const loginAdmin = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/users/admin-login`, {
      email: email,
      password: password,
    });
    const { token } = response.data.data;
    return { token };
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    }
  }
};

/* ========================================================= */
/* === ACTIVE USER, COURSE, PAYMENT STATUS, MANAGE CLASS === */
/* ========================================================= */
export const getActiveUserAndCourse = async () => {
  try {
    const token = localStorage.getItem("tokenAdmin");
    const response = await axios.get(`${baseUrl}/course/get-active`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    }
  }
};

export const getPaymentStatus = async () => {
  try {
    const token = localStorage.getItem("tokenAdmin");
    const response = await axios.get(`${baseUrl}/course/get-payment-status`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    }
  }
};

export const getManageClass = async () => {
  try {
    const token = localStorage.getItem("tokenAdmin");
    const response = await axios.get(`${baseUrl}/course/get-manage-class`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    }
  }
};

/* ============== */
/* === SEARCH === */
/* ============== */
export const searchDashboard = async (keyword) => {
  try {
    const token = localStorage.getItem("tokenAdmin");
    const response = await axios.get(
      `${baseUrl}/course/search-dashboard?keyword=${keyword}`,
      {
        keyword: keyword,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    }
  }
};

export const searchManageClass = async (keyword) => {
  try {
    const token = localStorage.getItem("tokenAdmin");
    const response = await axios.get(
      `${baseUrl}/course/search-manage-class/?keyword=${keyword}`,
      {
        keyword: keyword,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    }
  }
};

/* ========================================= */
/* === CREATE, UPDATE, AND DELETE COURSE === */
/* ========================================= */
export const createCourse = async (file, course) => {
  try {
    const token = localStorage.getItem("tokenAdmin");
    await axios.post(
      `${baseUrl}/course/create`,
      file,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const response = await axios.post(
      `${baseUrl}/course/create`,
      course,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.data;
  } catch (error) {
    if (error.response) {
      console.error("Error Response Data:", error.response.data);
      toast.error(error.response.data.message || "Server error");
    } else if (error.request) {
      console.error("Request made but no response received:", error.request);
      toast.error("No response from server");
    } else {
      console.error("Error setting up the request:", error.message);
      toast.error("Request setup error");
    }
    throw error;
  }
};