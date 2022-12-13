import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    username: "",
    password: "",
    isAuth: false,
    token: "",
    loading: false,
    status: "",
    error: null,
  },
  reducers: {
    loginRequest(state) {
      state.loading = true;
    },
    successLogin(state, action) {
      state.isAuth = true;
      state.status = "success";
      state.loading = false;
      state.token = action.payload.accessToken;
      state.login = true;
    },
    failedLogin(state, action) {
      state.status = "failed";
      state.loading = false;
      state.token = "";
      state.error = action.payload.error;
    },
    Logout(state, action) {
      state.token = "";
      state.loading = false;
      state.status = "1";
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
