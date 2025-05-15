import axios from "axios";

const Base_URL = "http://localhost:5175/api/users";

export const regUserService = async (userData) => {
  const response = await axios.post(`${Base_URL}/register`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const verifyOTP = async (otpData) => {
  const response = await axios.post(`${Base_URL}/verify-otp/${otpData.id}`, {
    otp: otpData.otp,
  });
  return response.data;
};

// ✅ renamed to avoid conflict
export const loginUserService = async (userData) => {
  const response = await axios.post(`${Base_URL}/login-user`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
