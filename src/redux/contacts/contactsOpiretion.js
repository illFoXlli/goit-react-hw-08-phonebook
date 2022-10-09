import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  deleteContacts,
  getAddContacts,
  getEditContacts,
} from '../../utils/api';

export const fetchContacts = createAsyncThunk(
  'contacts/function',
  async function (_, { rejectWithValue }) {
    try {
      const data = await getContacts();

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

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async function (id, { rejectWithValue, dispatch }) {
//     try {
//       const data = await deleteContacts(id);

//       return data.id;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );



// export const editContacts = createAsyncThunk(
//   'contacts/editContacts',
//   async function (contact, { rejectWithValue, dispatch }) {
//     try {
//       const data = await getEditContacts(contact);
//       console.log(data);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
