import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/users/userSlice";
import postSlice from "../features/posts/postSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    album: postSlice,
  },
});
