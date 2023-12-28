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
export const createCourse = async (token, courseData) => {
  try {
    const response = await axios.post(
      `${baseUrl}/course/v2/create-course`,
      courseData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    toast.success("Successfully created course");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getClassForUpdate = async (idCourse) => {
  try {
    const token = localStorage.getItem("tokenAdmin");
    const response = await axios.get(
      `${baseUrl}/course/get-class-data/${idCourse}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateCourse = async (token, idCourse, courseData) => {
  try {
    const response = await axios.put(
      `${baseUrl}/course/v2/update-class-new/${idCourse}`,
      courseData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("Successfully Update course");
    return response.data;
  } catch (error) {
    console.error("Error updating course:", error);
    throw error;
  }
};

export const deleteCourse = async (idCourse) => {
  try {
    const token = localStorage.getItem("tokenAdmin");
    const response = await axios.delete(
      `${baseUrl}/course/delete-course/${idCourse}`,
      {
        idCourse: idCourse,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("Course deleted successfully");
    return response.data.data;
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    }
  }
};