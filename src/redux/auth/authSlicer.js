import { createSlice } from '@reduxjs/toolkit';
import {register, logIn, logOut} from "./authOpiretion"


const initialState = {
    user: { name: null, email: null},
    token: null,
    isLoggrdIn: false,
    TEST: true,
    error: null,
}


const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
      [register.fulfilled]: (state, action) => {

        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggrdIn = true;
        // state.auth.isLoggrdIn = true;
       
      },
      [register.rejected]: (state, action) => {
        state.error = action.payload;
      },
      ////////////////////////////////////////
      [logIn.fulfilled]: (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggrdIn = true;

      },
      [logIn.rejected]: (state, action) => {
        state.error = action.payload;
      },
    ////////////////////////////////////////
      [logOut.fulfilled]: (state, action) => {
        state.user = { name: null, email: null};
        state.token = null;
        state.isLoggrdIn = false;
      },
      [logOut.rejected]: (state, action) => {
        state.error = action.payload;
      },
  }

  
})

export const authReducer = authSlice.reducer;

