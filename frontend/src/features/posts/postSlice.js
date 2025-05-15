import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Posts } from "../../../../backend/models/postModel";

const initialState = {
  Posts: [],
  postLoading: false,
  postError: false,
  postSuccess: false,
  postMessage: "",
};
export const addPostData = createAsyncThunk(
  "add-post",
  async (postData, thunkAPI) => {
    try {
      // your API call here (e.g., axios.post or fetch)
      return await addpost(postData); // replace with actual response
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postReset: (state) => {
      state.postLoading = false;
      state.postError = false;
      state.postSuccess = false;
      state.postMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPostData.pending, (state) => {
        state.postLoading = true;
      })
      .addCase(addPostData.fulfilled, (state, action) => {
        state.postLoading = false;
        state.postSuccess = true;
        state.postMessage = action.payload.message;
        state.Posts.push(action.payload);
      })
      .addCase(addPostData.rejected, (state, action) => {
        state.postLoading = false;
        state.postError = true;
        state.postMessage = action.payload.message;
      });
  },
});
export default postSlice.reducer;
export const { postReset } = postSlice.actions;
