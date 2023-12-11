import axios from 'axios';
import { toast } from "react-toastify";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getAllCategory = async () => {
  try {
    const response = await axios.get(`${baseUrl}/category/get`);
    // console.log(response);
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
}

export const getPopularCourse = async (q) => {
  try {
    const response = await axios.get(`${baseUrl}/course/popular-course?category=${q}`);
  // console.log("response:",response);  
    return response.data.data;  
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getCourseList = async () => {
  try {
    const response = await axios.get(`${baseUrl}/course/get-course`);
    // console.log(response);
    return response.data.data;  
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getPremiumClass = async () => {
  try {
    const response = await axios.get(`${baseUrl}/course/get-premium`);
    // console.log("Response:", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching premium classes:", error);
    throw error;
  }
};

export const getFreeClass = async () => {
  try {
    const response = await axios.get(`${baseUrl}/course/get-free`);
    // console.log("Response :", response.data.data);
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${baseUrl}/users`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("response:",response.data);
    return response.data;  
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
}

export const updateUser = async (dataUser) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(`${baseUrl}/users`,
    dataUser,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("response :", response.data);
  return response.data;  
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
}

export const changePassword = async ({ oldpassword, newpassword }) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(
      `${baseUrl}/users/change-password`,
      {
        oldpassword,
        newpassword,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    // console.log("response :", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else if (error.request) {
      toast.error("Tidak ada respons dari server");
    } else {
      toast.error("Terjadi kesalahan");
    }
    throw error;
  }
};
