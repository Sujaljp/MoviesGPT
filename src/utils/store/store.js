import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import movies from "./moviesSlice";

const appStore = configureStore({
  reducer: { user, movies },
});

export default appStore;
