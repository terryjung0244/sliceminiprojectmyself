import { configureStore } from "@reduxjs/toolkit";
import jphSlice from "../../jphSlice/jphSlice";

export const createStore = () =>
  configureStore({
    reducer: {
      jphSlice,
    },
  });

export const store = createStore();
