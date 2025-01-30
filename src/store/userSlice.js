import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SummaryApi from "../utils/SummaryApi.js";
import Axios from "../utils/Axios.js";
import { cleanErrorMessage } from "../utils/clearErrorMessage.js";
import { AxiosToast } from "../utils/AxiosToast.js";
import toast from "react-hot-toast";

export const registerUser = createAsyncThunk(
  "registerUser",
  async (userData, thunkAPI) => {
    const payload = {
      fname: userData.name.split(" ")[0],
      lname: userData.name.split(" ")[1],
      email: userData.email,
      password: userData.password,
    };
    try {
      const response = await Axios({
        ...SummaryApi.register,
        data: payload,
      });
      return {
        message: response.data.message,
        statusCode: response.status,
        token: response.data.token?.access,
        refresh: response.data.token?.refresh,
      };
    } catch (error) {
      const errorPayload = AxiosToast("error", error);
      return thunkAPI.rejectWithValue({
        message: cleanErrorMessage(errorPayload.message),
        statusCode: error.status,
      });
    }
  }
);
export const verifyOtp = createAsyncThunk(
  "verifyOtp",
  async ({ user_email, otp }, thunkAPI) => {
    try {
      let otpData = {
        email: user_email,
        otp: otp,
      };
      const response = await Axios({
        ...SummaryApi.verify_otp,
        data: otpData,
      });
      return {
        token: response.data.token?.access,
        refresh: response.data.token?.refresh,
        message: response.data.message,
        statusCode: response.status,
      };
    } catch (error) {
      const errorPayload = AxiosToast("error", error);
      return thunkAPI.rejectWithValue({
        message: cleanErrorMessage(errorPayload.message),
        statusCode: error.status,
      });
    }
  }
);
export const loginUser = createAsyncThunk(
  "login",
  async (userData, thunkAPI) => {
    try {
      const response = await Axios({
        ...SummaryApi.login,
        data: userData,
      });
      return {
        message: response.data.message,
        token: response.data.token?.access,
        refresh: response.data.token?.refresh,
        statusCode: response.status, // Include token if login is successful
      };
    } catch (error) {
      const errorPayload = AxiosToast("error", error);
      return thunkAPI.rejectWithValue({
        message: cleanErrorMessage(errorPayload.message),
        statusCode: error.status,
      });
    }
  }
);

export const userDetailsbyID = createAsyncThunk(
  "userDetailsID",
  async (userData, thunkAPI) => {
    try {
      const response = await Axios({
        ...SummaryApi.getUserByID,
      });
      return {
        message: response.data.message,
        statusCode: response.status,
        userDetails: response.data.data,
      };
    } catch (error) {
      const errorPayload = AxiosToast("error", error);
      return thunkAPI.rejectWithValue({
        message: cleanErrorMessage(errorPayload.message),
        statusCode: error.status,
      });
    }
  }
);

export const updateUserDetailsbyID = createAsyncThunk(
  "updateUserDetailsID",
  async (userData, thunkAPI) => {
    console.log(userData);

    try {
      const response = await Axios({
        ...SummaryApi.updateUserByID,
        data: {
          username: userData.username,
          fname: userData.firstName,
          lname: userData.lastName,
          dob: userData.date,
          phone: userData.phoneNumber,
          image: userData.image,
        },
      });
      return {
        message: response.data.message,
        statusCode: response.status,
        userDetails: response.data.data,
      };
    } catch (error) {
      const errorPayload = AxiosToast("error", error);
      return thunkAPI.rejectWithValue({
        message: cleanErrorMessage(errorPayload.message),
        statusCode: error.status,
      });
    }
  }
);

export const searchUsers = createAsyncThunk(
  "seacrhUsers",
  async (query, thunkAPI) => {
    try {
      const response = await Axios({
        ...SummaryApi.searchUser,
        data: {
          keyword: query,
        },
      });
      return {
        message: response.data.message,
        data: response.data.data,
      };
    } catch (error) {
      const errorPayload = AxiosToast("error", error);
      return thunkAPI.rejectWithValue({
        message: cleanErrorMessage(errorPayload.message),
        statusCode: error.status,
      });
    }
  }
);

export const sendFirendRequest = createAsyncThunk(
  "sendFirendRequest",
  async (id, thunkAPI) => {
    try {
      const response = await Axios({
        ...SummaryApi.sendFirendRequest,
        data: {
          user_id: id,
        },
      });
      AxiosToast("success", response.data.message);
      return {
        message: response.data.message,
        data: response.data.data,
      };
    } catch (error) {
      console.log("catch");

      const errorPayload = AxiosToast("", error);
      return thunkAPI.rejectWithValue({
        message: cleanErrorMessage(errorPayload.message),
        statusCode: error.status,
      });
    }
  }
);

export const removeFriendRequest = createAsyncThunk(
  "removeFriendRequest",
  async (id, thunkAPI) => {
    try {
      const response = await Axios({
        ...SummaryApi.removeFirendRequest,
        data: {
          user_id: id,
        },
      });
      AxiosToast("success", response.data.message);
      return {
        message: response.data.message,
        data: response.data.data,
      };
    } catch (error) {
      console.log("catch");

      const errorPayload = AxiosToast("", error);
      return thunkAPI.rejectWithValue({
        message: cleanErrorMessage(errorPayload.message),
        statusCode: error.status,
      });
    }
  }
);

export const acceptFirendRequest = createAsyncThunk(
  "acceptFirendRequest",
  async (id, thunkAPI) => {
    try {
      const response = await Axios({
        ...SummaryApi.acceptFriendRequest,
        data: {
          user_id: id,
        },
      });
      AxiosToast("success", response.data.message);
      return {
        message: response.data.message,
        data: response.data.data,
      };
    } catch (error) {
      console.log("catch");

      const errorPayload = AxiosToast("", error);
      return thunkAPI.rejectWithValue({
        message: cleanErrorMessage(errorPayload.message),
        statusCode: error.status,
      });
    }
  }
);


const initialValue = {
  token: null,
  refresh_token: null,
  status: "idle",
  message: null,
  isLoading: false,
  isLoggedIn: false,
  statusCode: "",
  userDetails: {},
};

const userSlice = createSlice({
  name: "user",
  initialState: initialValue,
  reducers: {
    resetMessages: (state) => {
      state.message = null;
      state.statusCode = null;
      state.isLoading = false;
    },
    logout: (state) => {
      state.user_email = null;
      state.token = null;
      state.isLoading = false;
      state.isLoggedIn = false;
      localStorage.removeItem("accessToken");
      toast.success("Logged out successfully");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true; // Set loading state
        state.message = null; // Clear message
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload?.message || "Failed to register user";
        state.statusCode = action.payload?.statusCode;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user_email = action.payload.message
          ? action.meta.arg.email
          : null;
        state.isLoading = false;
        state.message = action.payload.message
          ? cleanErrorMessage(action.payload.message)
          : null;
        state.statusCode = action.payload.statusCode;
        localStorage.setItem("accessToken", action.payload.token);
        toast.success(action.payload.message || "Account Created Successfully");
      })
      .addCase(verifyOtp.pending, (state) => {
        state.isLoading = true; // Set loading state
        state.message = null; // Clear message
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message || "Failed to register user";
        state.statusCode = action.payload.statusCode;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token || null;
        localStorage.setItem("accessToken", action.payload.token);
        state.refresh_token = action.payload.refresh || null;
        state.message = action.payload.message;
        state.isLoggedIn = true;
        state.message = action.payload.message
          ? cleanErrorMessage(action.payload?.message)
          : null;
        state.statusCode = action.payload.statusCode;
        toast.success(action.payload.message || "Login Successful");
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true; // Set loading state
        state.message = null; // Clear message
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload?.message || "Failed to register user";
        state.statusCode = action.payload?.statusCode;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token || null;
        localStorage.setItem("accessToken", action.payload.token);
        state.message = action.payload.message;
        state.statusCode = action.payload.statusCode;
        toast.success(action.payload.message || "Login Successful");
      })
      .addCase(userDetailsbyID.pending, (state) => {
        state.isLoading = true; // Set loading state
        state.message = null; // Clear message
      })
      .addCase(userDetailsbyID.rejected, (state, action) => {
        state.isLoading = false;
        state.message =
          action.payload?.message || "Error fetching user details";
        state.statusCode = action.payload?.statusCode;
      })
      .addCase(userDetailsbyID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.statusCode = action.payload.statusCode;
        state.userDetails = action.payload.userDetails;
        toast.success(
          action.payload.message || "User Details Fetched Successful"
        );
      })
      .addCase(updateUserDetailsbyID.pending, (state) => {
        state.isLoading = true; // Set loading state
        state.message = null; // Clear message
      })
      .addCase(updateUserDetailsbyID.rejected, (state, action) => {
        state.isLoading = false;
        state.message =
          action.payload?.message || "Error fetching user details";
        state.statusCode = action.payload?.statusCode;
      })
      .addCase(updateUserDetailsbyID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.statusCode = action.payload.statusCode;
        state.userDetails = action.payload.userDetails;
        toast.success(
          action.payload.message || "User Details Updated Successful"
        );
      });
  },
});

export const { resetMessages, logout } = userSlice.actions;
export default userSlice.reducer;
