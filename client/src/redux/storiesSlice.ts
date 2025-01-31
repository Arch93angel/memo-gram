import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Story } from "../types/Types";
import { RootState } from "./store";



const API_URL = "http://localhost:8000/api/stories/";

export const fetchStories = createAsyncThunk<Story[], undefined, { state: RootState }>(
  "stories/fetchStories",
  async (_, { rejectWithValue, getState }) => {
    // Get the token from Redux state
    const token = getState().auth.token;

    // If no token, reject the request
    if (!token) {
      return rejectWithValue("Unauthorized: No token provided");
    }

    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in Authorization header
        },
      });

      return response.data; // Return the response data
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

interface storiesState {
  stories: Story[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: storiesState = {
  stories: [],
  status: "idle",
  error: null,
};

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.stories = action.payload;
      })
      .addCase(fetchStories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default storiesSlice.reducer;


