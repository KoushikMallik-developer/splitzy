import { createAsyncThunk } from "@reduxjs/toolkit";
import SummaryApi from "../utils/SummaryApi.js";
import Axios from "../utils/Axios.js";
import { cleanErrorMessage } from "../utils/clearErrorMessage.js";
import { AxiosToast } from "../utils/AxiosToast.js";

export const createGroup = createAsyncThunk(
  "createGroup",
  async (payload, thunkAPI) => {
    try {
      const response = await Axios({
        ...SummaryApi.createGroup,
        data: payload,
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

export const getGroupByUser = createAsyncThunk(
  "getGroupByUser",
  async (id, thunkAPI) => {
    try {
      const response = await Axios({
        ...SummaryApi.getGroupByUser,
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

export const deleteGroup = createAsyncThunk(
  "deleteGroup",
  async (id, thunkAPI) => {
    try {
      const response = await Axios({
        ...SummaryApi.deleteGroup,
        data: { group_id: id },
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
