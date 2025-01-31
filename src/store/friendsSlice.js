import { createAsyncThunk } from "@reduxjs/toolkit";
import SummaryApi from "../utils/SummaryApi.js";
import Axios from "../utils/Axios.js";
import { cleanErrorMessage } from "../utils/clearErrorMessage.js";
import { AxiosToast } from "../utils/AxiosToast.js";

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
  },
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
  },
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
  },
);

export const getAllFriendRequests = createAsyncThunk(
  "getAllFriendRequests",
  async (id, thunkAPI) => {
    try {
      const response = await Axios({
        ...SummaryApi.getAllFriendRequests,
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
  },
);

export const getAllFriends = createAsyncThunk(
  "getAllFriends",
  async (id, thunkAPI) => {
    try {
      const response = await Axios({
        ...SummaryApi.getAllFriends,
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
  },
);
