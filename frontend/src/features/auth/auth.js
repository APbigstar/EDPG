import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "auth",
  initialState: {
    value: false,
  },
  reducers: {
    setLoginState: (state) => {
      state = !state;
    },
  },
});

export const { setLoginState } = counterSlice.actions;
export default counterSlice.reducer;
