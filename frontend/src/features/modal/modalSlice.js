import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state) => {
      state.modal = true;
    },
    close: (state) => {
      state.modal = false;
    },
  },
});

export default modalSlice.reducer;
export const { open, close } = modalSlice.actions;
