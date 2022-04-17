import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface focusState {
  value: number
}

const initialState: focusState = {
  value: 0
}

export const focusSlice = createSlice({
  name: "focus",
  initialState,
  reducers: {
    disable: (state) => {
      state.value += 1
    },
    enable: (state) => {
      state.value -= 1
    },
    setAmount: (state, action) => {
      state.value = action.payload
    }
  }
})

export const {disable, enable, setAmount} = focusSlice.actions;
export const selectVal = (state: RootState) => state.focus.value;
export default focusSlice.reducer;