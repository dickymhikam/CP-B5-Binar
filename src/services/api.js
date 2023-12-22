import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = import.meta.env.VITE_BASE_URL;

/* ============ */
/* === AUTH === */
/* ============ */
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/users/login`, {
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

export const registerUser = async (name, email, telp, password) => {
  try {
    await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, {
      nama: name,
      email: email,
      telp: telp,
      password: password,
    });
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
    toast.success("OTP benar. Redirecting...");
    const { token } = response.data.data;
    return { token };
  } catch (error) {
    if (error.response) {
      toast.error("Otp salah, silakan coba lagi");
    }
  }
};

export const resendOtp = async (email) => {
  try {
    await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/resend-otp/${email}`
    );
    toast.success("OTP berhasil dikirim ulang.");
    return true;
  } catch (error) {
    if (error.response) {
      toast.error("Gagal mengirim ulang OTP, silakan coba lagi");
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
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const resetPassword = async (email, code, newPassword) => {
  try {
    const response = await axios.put(
      `${baseUrl}/users/set-forgot-password?email=${email}&code=${code}&newPassword=${newPassword}`
    );
    toast.success(response.data.message);
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
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getPopularCourse = async (q) => {
  try {
    const response = await axios.get(
      `${baseUrl}/course/popular-course?category=${q}`
    );
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
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getFilter = async (isNewest,isPopular,category,level,type) => {
  try{
    const response = await axios.get(`${baseUrl}/course/filter?isNewest=${isNewest}&isPopular=${isPopular}&category=${category}&level=${level}&classType=${type}`)
    return response.data.data;
  } catch (error) {
    return;
  }
}

/* ==================== */
/* === Search Topik === */
/* ==================== */
export const getAllSearchTopik = async (keyword) => {
  try {
    const response = await axios.get(`${baseUrl}/course/search/${keyword}`);
    return response.data.data;
  } catch (error) {
    return;
  }
};

export const getPremiumSearchTopik = async (keyword) => {
  try {
    const response = await axios.get(`${baseUrl}/course/search-premium/${keyword}`);
    return response.data.data;
  } catch (error) {
    return;
  }
};

export const getFreeSearchTopik = async (keyword) => {
  try {
    const response = await axios.get(`${baseUrl}/course/search-free/${keyword}`);
    return response.data.data;
  } catch (error) {
    return;
  }
};

/* ================== */
/* === KELAS SAYA === */
/* ================== */
export const getAllMyClass = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `
  ${baseUrl}/course/get/get-progress-finish`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(response)
    return response.data.data
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const getMyProgressClass = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${baseUrl}/course/get/get-in-progress`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    )
    return response.data.data
  } catch (error) {
    toast.error(error.response.data.message);
  }
}

export const getMyFinishClass = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${baseUrl}/course/get/get-finished`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    )
    return response.data.data
  } catch (error) {
    toast.error(error.response.data.message);
  }
}

export const getFilterClassBerjalan = async (newest,popular,progress,category,level) => {
  try{
  const token = localStorage.getItem("token");
  const response = await axios.get(`${baseUrl}/course/filter-porgress?isNewest=${newest}&isPopular=${popular}&progressType=${progress}&category=${category}&level=${level}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    return response.data.data
  } catch (error){
    return;
  }
}

/* ==================== */
/* === Kelas Search === */
/* ==================== */
export const searchAllMyClass = async (query) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${baseUrl}/course/search/search-progress-finish/${query}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    return;
  }
};
export const searchMyProgressClass = async (query) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${baseUrl}/course/search/search-progress/${query}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    return;
  }
};

export const searchMyFinishClass  = async (query) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${baseUrl}/course/search/search-finished/${query}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    return;
  }
};

/* ============ */
/* === USER === */
/* ============ */
export const getUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${baseUrl}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const updateUser = async (dataUser) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(`${baseUrl}/users`, dataUser, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
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
    toast.success("Gambar Profil Berhasil Diunggah");
    return response.data.url;
  } catch (error) {
    toast.error("Gambar profil gagal diunggah");
    throw error;
  }
};

export const getProfilePicture = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${baseUrl}/users/get-user-profile-pic`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data.imageUrl;
};

/* ============== */
/* === DETAIL === */
/* ============== */
export const getDetailCourse = async (kode) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${baseUrl}/course/get/${kode}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const videoTrigger = async (kode) => {
  try {
    const token = localStorage.getItem("token");
    await axios.post(`${baseUrl}/course/watched/${kode}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw(error);
  }
}

/* ============ */
/* === ORDER === */
/* ============ */
export const createOrder = async (courseCode) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${baseUrl}/order`,
      { courseCode: courseCode },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(response.message);
    return response.data.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const payCourse = async (ordercode, cardNumber, cardType) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `https://backend-video-course-production.up.railway.app/api/order/payment`,
      {
        ordercode: ordercode,
        cardNumber: cardNumber,
        cardType: cardType,
      },
      {
        params: {
          ordercode: ordercode,
          cardNumber: cardNumber,
          cardType: cardType,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response
        ? error.response.data.message ||
          "Terjadi kesalahan saat memproses permintaan."
        : "Terjadi kesalahan, mohon coba lagi nanti."
    );
  }
};

export const getPaymentHistory = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${baseUrl}/course/payment-history`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    toast.error(error.message);
  }
};