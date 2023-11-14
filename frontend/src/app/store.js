import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user.slice";
import postReducer from "../feature/post.slice";
import profilReducer from "../feature/profil.slice";

export default configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    profil: profilReducer,
  },
});
