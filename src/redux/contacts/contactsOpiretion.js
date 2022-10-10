import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  getDeleteContacts,
  getAddContacts,
  getEditContacts,
} from '../../utils/api';

export const fetchContacts = createAsyncThunk(
  'contacts/function',
  async function (tokenState, { rejectWithValue }) {
    try {
      const data = await getContacts(tokenState);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async function (contact, { rejectWithValue }) {
    try {
      const data = await getAddContacts(contact);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      await getDeleteContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editContacts = createAsyncThunk(
  'contacts/editContacts',
  async function (contact, { rejectWithValue, dispatch }) {
    try {
      const data = await getEditContacts(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
