import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "auth",
  initialState: {
    value: false,
  },
  reducers: {
    setLoginState: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setLoginState } = counterSlice.actions;
export default counterSlice.reducer;
