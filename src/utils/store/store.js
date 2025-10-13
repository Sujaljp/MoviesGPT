import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import movies from "./moviesSlice";
import config from "./configSlice"

const appStore = configureStore({
  reducer: { user, movies, config },
});

export default appStore;
