import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("getPosts", async (_, thrunkAPI) => {
  axios
    .get("http://localhost:5000/post/")
    .then((res) => thrunkAPI.dispatch(getPostsSuccess(res.data)));
});

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    postData: [],
  },
  reducers: {
    getPostsSuccess: (state, { payload }) => {
      state.postsData = payload;
    },
    createPost: (state, { payload }) => {
      state.postData.push(payload);
    },
    editPost: (state, { payload }) => {
      state.postsData = state.postsData.map((post) => {
        if (post._id === payload[1]) {
          return {
            ...post,
            message: payload[0],
          };
        } else {
          return post;
        }
      });
    },
  },
});

export const { getPostsSuccess, createPost, editPost } = postSlice.actions;
export default postSlice.reducer;
