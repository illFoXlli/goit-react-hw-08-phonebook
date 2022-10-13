import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, getCurrentUser } from './authOpiretion';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  TEST: true,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      // state.auth.isLoggedIn = true;
    },
    [register.rejected]: (state, action) => {
      state.error = action.payload;
    },
    ////////////////////////////////////////
    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected]: (state, action) => {
      state.error = action.payload;
    },
    ////////////////////////////////////////
    [logOut.fulfilled]: (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected]: (state, action) => {
      state.error = action.payload;
    },
    //////////////////////////////////////
    [getCurrentUser.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = { name: action.payload.name, email: action.payload.email };
    },
    [getCurrentUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
