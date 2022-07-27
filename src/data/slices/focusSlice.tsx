import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface focusState {
  value: boolean;
}

const initialState: focusState = {
  value: false,
};

export const focusSlice = createSlice({
  name: "focus",
  initialState,
  reducers: {
    setFocus: (state: any, action: any) => {
      state.value = action.payload;
    },
  },
});

export const { setFocus } = focusSlice.actions;
export const selectVal = (state: RootState) => state.focus.value;
export default focusSlice.reducer;
