import axios from 'axios';
import { toast } from "react-toastify";

const baseUrl = import.meta.env.VITE_BASE_URL;

/* ============ */
/* === AUTH === */
/* ============ */
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(
      `${baseUrl}/users/login`,
      {
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
}

export const registerUser = async (name, email, telp, password) => {
  try {
    await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      {
        nama: name,
        email: email,
        telp: telp,
        password: password,
      }
    );
    return true;
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    }
  }
};

export const verifyOtp = async (otp) => {
  try {
    const response = await axios.post(`${baseUrl}/users/otp/${otp}`);
    toast.success('OTP benar. Redirecting...');
    const { token } = response.data.data;
    return { token };
  } catch (error) {
    if (error.response) {
      toast.error('Otp salah, silakan coba lagi');
    }
  }  
}

export const resendOtp = async (email) => {
  try {
    await axios.post(`${import.meta.env.VITE_BASE_URL}/users/resend-otp/${email}`);
    toast.success('OTP berhasil dikirim ulang.');
    return true;
  } catch (error) {
    if (error.response) {
      toast.error('Gagal mengirim ulang OTP, silakan coba lagi');
    }
  }  
};

export const resetEmail = async (email) => {
  try {
    const response = await axios.post(
      `${baseUrl}/users/forgot-password?email=${email}`,
      {
        email: email,
      }
    );
    toast.success(response.data.message);
      // console.log('response',response)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const resetPassword = async (email,code,newPassword) => {
  try {
    const response = await axios.put(
      `${baseUrl}/users/set-forgot-password?email=${email}&code=${code}&newPassword=${newPassword}`
    );
    toast.success(response.data.message);
    // console.log('response', response);  
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

/* ============== */
/* === COURSE === */
/* ============== */
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
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
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

/* ============ */
/* === USER === */
/* ============ */
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

export const postPicture = async (formData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${baseUrl}/users/update-profil-pic`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    // console.log("response :", response);
    toast.success("Gambar Profil Berhasil Diunggah")
    return response.data.url;
  } catch (error) {
    toast.error("Gambar profil gagal diunggah")
    throw error;
  }
};

export const getProfilePicture = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${baseUrl}/users/get-user-profile-pic`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data.imageUrl;
  } catch (error) {
    throw error;
  }
};