import axios from 'axios';
import { toast } from "react-toastify";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getAllCategory = async () => {
    try {
      const response = await axios.get(`${baseUrl}/category/Web Development`);
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
    const response = await axios.get(`${baseUrl}/course/0`);
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