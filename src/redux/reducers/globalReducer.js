import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    global: [],
  },
  reducers: {
    fetchGlobalData(state, action) {
      state.global = action.payload;
    },
  },
});

export const globalActions = globalSlice.actions;

export default globalSlice.reducer;
