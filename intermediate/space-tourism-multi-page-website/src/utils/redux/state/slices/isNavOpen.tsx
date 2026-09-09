import { createSlice } from "@reduxjs/toolkit";

interface IIsNavOpenState {
  value: boolean;
}

const initialState: IIsNavOpenState = {
  value: false,
};

const isNavOpenSlice = createSlice({
  name: "isNavOpen",
  initialState,
  reducers: {
    open: (state) => {
      state.value = true;
    },

    close: (state) => {
      state.value = false;
    },
  },
});

export const { open, close } = isNavOpenSlice.actions;
export default isNavOpenSlice.reducer;
