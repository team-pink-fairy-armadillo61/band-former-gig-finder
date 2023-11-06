import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    editPost: (state, action) => {
      const { postId, updatedPost } = action.payload;
      const oldPost = state.posts.filter((ele) => (ele.id = postId));
      const index = state.posts.indexOf(oldPost);
      state.posts.splice(index, 1, updatedPost);
    },
    findPost: (state, action) => {
      const { postId } = action.payload;
      const foundPost = state.posts.filter((ele) => (ele.id = postId));
    },
    deletePost: (state, action) => {
      const { postId } = action.payload;
      const deletedPost = state.posts.filter((ele) => (ele.id = postId));
      const index = state.posts.indexOf(deletedPost);
      state.posts.splice(index, 1);
    },
    getPost: (state, action) => {
      const posts = state.posts;
    },
  },
});

export default postSlice;
