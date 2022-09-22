import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/authSlice";
import modalReducer from "../features/modal/modalSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
});

export default store;
