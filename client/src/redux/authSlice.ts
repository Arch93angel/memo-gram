// features/authSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { toastError, toastInfo, toastSuccess, toastWarning } from '../utils/toast';



interface AuthState {
  user: string | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};


// Register action
export const registerUser = createAsyncThunk(
  'auth/register',
  async (
    { username, password, email, confirmPassword }: { username: string; password: string,email:string, confirmPassword: string },
    { rejectWithValue }
  ) => {
    try {
        
          if (password===confirmPassword) {
          const response = await axios.post('http://localhost:8000/api/users/', {
            username,
            password,
            email,
          });
          
          toastSuccess("Registration Successful");
           // Save token to localStorage
          return response.data;
          }else toastError("Password do not match..");
        
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Registration failed');
    }
  }
);

// Login action
export const loginUser = createAsyncThunk(
  'auth/login',
  
  async (
    { username, password}: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      if (username && password) {
          const response = await axios.post('http://localhost:8000/auth/', {
            username,
            password,
          });
          toastSuccess("Login Successful");
          return response.data;
      } else toastError("Fields should not be left empty..");
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
      toastInfo("Sign Out Successful")
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
      state.token = action.payload;
      localStorage.setItem('token', action.payload); // Store token in localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload || null; // Ensure token is updated
        state.user = action.payload || null;
        localStorage.setItem('token', action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, setToken } = authSlice.actions;

export default authSlice.reducer;
