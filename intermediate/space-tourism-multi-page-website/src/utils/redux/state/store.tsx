import { configureStore } from "@reduxjs/toolkit";
import isNavOpen from "./slices/isNavOpen";
import currentPath from "./slices/currentPath";

export const store = configureStore({
  reducer: { isNavOpen, currentPath },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
