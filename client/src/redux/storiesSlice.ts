// features/apiSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface PostData {
  username: string;
  email: string;
}

interface ApiState {
  loading: boolean;
  data: any;
  error: string | null;
}

const initialState: ApiState = {
  loading: false,
  data: null,
  error: null,
};

// Async thunk for POST request
export const createStory = createAsyncThunk(
  'api/stories',
  async (postData: PostData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/api/stories/', postData, {
        headers: { 
          'Content-Type': 'application/json'
          
         },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

const storySlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createStory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createStory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(createStory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default storySlice.reducer;
