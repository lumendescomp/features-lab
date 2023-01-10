import { configureStore } from "@reduxjs/toolkit";
import toggleModeReducer from "./slices/darkModeSlice";

export const store = configureStore({
  reducer: {
    isDarkMode: toggleModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
