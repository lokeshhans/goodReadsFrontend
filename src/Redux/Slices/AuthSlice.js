import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "Configs/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
  isLoggedIn: localStorage.getItem("isloggedIn") || false,
  username: localStorage.getItem("username") || "",
  token: localStorage.getItem("token") || "",
};

export const signup = createAsyncThunk("Auth/signup", async (data) => {
  try {
    const response = axiosInstance.post("signup", data);
    toast.promise(response, {
      loading: "Signing up...",
      success: "Signup successful!",
      error: "Signup failed. Please try again.",
    });
    return await response;
  } catch (error) {
    console.log(error);
    toast.error("Signup failed. Please try again.");
  }
});

export const signin = createAsyncThunk("Auth/signin", async (data) => {
  try {
    const response = axiosInstance.post("signin", data);
    toast.promise(response, {
      loading: "Signing...",
      success: "Signin successful!",
      error: "Signin failed. Please try again.",
    });
    return await response;
  } catch (error) {
    if (error?.response?.data?.err) {
      toast.error(error?.response?.data?.err);
    } else {
      toast.error("can,t signin. Please try again.");
    }
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = "";
      state.token = "";
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    // Add any extra reducers if needed
    builder.addCase(signin.fulfilled, (state, action) => {
      if (action?.payload?.data) {
        const recievedData = action.payload.data?.data;
        state.isLoggedIn = action?.payload?.data?.data != undefined;
        state.username = action?.payload?.data?.data?.username;
        state.token = action?.payload?.data?.data?.token;
        localStorage.setItem(
          "isLoggedIn",
          action?.payload?.data?.data != undefined
        );
        localStorage.setItem("username", recievedData?.username);
        localStorage.setItem("token", recievedData?.token);
      }
    });
  },
});
export const {logout} = authSlice.actions;
export default authSlice.reducer;
