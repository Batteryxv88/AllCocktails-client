import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

const initialState = {
  user: null,
  token: null,
  isLOading: false,
  status: null,
};

interface Auth {
  username: string;
  password: string;
}

export const registerUser = createAsyncThunk('auth/registration', () => {
  async ({ username, password }: Auth) => {
    try {
      const { data } = await axios.post('/auth/registration', {
        username,
        password,
      });
      if (data.token) {
        window.localStorage.setItem('token', data.token);
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  };
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  // extraReducers: {
  //   [registerUser.pending]: (state) => {
  //     state.isLOading = true;
  //     state.status = null;
  //   },
  //   [registerUser.fulfilled]: (state, action) => {
  //     state.isLOading = false;
  //     state.status = action.payload.message;
  //     state.user = action.payload.user
  //   },
  //   [registerUser.rejected]: (state) => {
  //     state.status = null;
  //   },
  // },
});

export default authSlice.reducer;
