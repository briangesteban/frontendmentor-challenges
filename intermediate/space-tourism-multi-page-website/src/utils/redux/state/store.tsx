import { configureStore } from "@reduxjs/toolkit";
import isNavOpen from "./slices/isNavOpen";

export const store = configureStore({
  reducer: { isNavOpen },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
