import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { regUserService, verifyOTP, loginUserService } from "./userService";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  userLoading: false,
  userSuccess: false,
  userError: false,
  userMessage: "",
};

export const regUserSlice = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      return await regUserService(userData);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login-user",
  async (userData, thunkAPI) => {
    try {
      return await loginUserService(userData); // ✅ use correct function
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const verifyUserOTP = createAsyncThunk(
  "user/verify-otp",
  async (otpData, thunkAPI) => {
    try {
      return await verifyOTP(otpData);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserState: (state) => {
      state.userLoading = false;
      state.userSuccess = false;
      state.userError = false;
      state.userMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(regUserSlice.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(regUserSlice.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })
      .addCase(regUserSlice.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(verifyUserOTP.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(verifyUserOTP.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })
      .addCase(verifyUserOTP.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
        state.user = null;
      });
  },
});

export const { resetUserState } = authSlice.actions;
export default authSlice.reducer;
