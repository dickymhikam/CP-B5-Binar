import axios from 'axios';
import { toast } from "react-toastify";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
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

export const getAllCategory = async () => {
    try {
      const response = await axios.get(`${baseUrl}/category/get`);
    //   console.log(response);
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
}

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
      }
    );
    console.log("response :", response.data);
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

