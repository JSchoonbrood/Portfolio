import { AnyAction, configureStore } from "@reduxjs/toolkit";
import focusSlice from "./slices/focusSlice";

export const store = configureStore({
  reducer: {
    focus: focusSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch