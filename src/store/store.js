import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "../Slices/ThemeSlice";
import { useEffect } from "react";
export const store = configureStore({
  reducer: ThemeSlice,
});
