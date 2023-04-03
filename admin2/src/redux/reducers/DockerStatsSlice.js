import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDockerStats = createAsyncThunk(
  "getDockerStats",
  async (object, { getState, rejectWithValue }) => {
    console.log(getState());

    try {
      const { data } = await axios.get("http://localhost:8089/GetDockerStats");
      return data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const DockerStatsSlice = createSlice({
  name: "stats",
  initialState: {
    data: [],
    loading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getDockerStats.pending]: (state, action) => {
      state.loading = true;
    },
    [getDockerStats.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getDockerStats.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
  },
});

export default DockerStatsSlice;
