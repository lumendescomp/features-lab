import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type initialStateProps = {
  value: boolean;
};

const initialState: initialStateProps = {
  value: false,
};

export const toggleModeSlice = createSlice({
  name: "toggleMode",
  initialState,
  reducers: {
    toggleMode(state, action) {
      state.value = action.payload;
    },
  },
});

export const { toggleMode } = toggleModeSlice.actions;

export const selectMode = (state: RootState) => state.isDarkMode.value;

export default toggleModeSlice.reducer;
