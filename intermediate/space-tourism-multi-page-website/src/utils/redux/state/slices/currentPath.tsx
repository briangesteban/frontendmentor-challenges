import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICurrentPath {
  value: string;
}

const initialState: ICurrentPath = {
  value: "/",
};

const currentPath = createSlice({
  name: "currentPath",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { update } = currentPath.actions;
export default currentPath.reducer;
