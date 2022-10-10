import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    postRegister,
    postLogIn,
    postLogOut,
    fetchCurrentUser
} from '../../utils/api';


export const register = createAsyncThunk(
  'auth/register',
  async function (credentials, { rejectWithValue }) {
    try {
      const data = await postRegister(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
    'auth/logIn',
    async function (credentials, { rejectWithValue }) {
      try {
        const data = await postLogIn(credentials);
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const logOut = createAsyncThunk(
    'auth/logOut',
    async function (_, { rejectWithValue }) {
      try {
        const data = await postLogOut();
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async function (_, { rejectWithValue, getState }) {
      const state = getState()
      const token = state.auth.token

      if(!token){
        return rejectWithValue()
      }
      try {
        
          const data = await fetchCurrentUser(token);
          return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  
