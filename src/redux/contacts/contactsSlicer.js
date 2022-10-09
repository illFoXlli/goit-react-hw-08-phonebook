import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  deleteContact,
  addContacts,
  editContacts,
} from './contactsOpiretion.js';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    status: null,
    error: null,
    editContact: null,
  },
  //////////////////////////////////////////////
  reducers: {
    editContactsAction: (state, action) => {
      state.editContact = action.payload;
    },
  },
  /////////////////////////////////////////////
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    //////////////////////////////////////
    [deleteContact.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, action) => {
      console.log('go');
      state.status = 'resolved';
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    [deleteContact.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    /////////////////////////////////////////
    [addContacts.pending]: (state, action) => {
      console.log('это пэндинг');
      state.status = 'loading';
      state.error = null;
    },
    [addContacts.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.status = 'resolved';
      state.items.unshift(action.payload);
    },
    [addContacts.rejected]: (state, action) => {
      console.log('=====================');
      state.status = 'rejected';
      state.error = action.payload;
    },
    //////////////////////////////////////////////
    [editContacts.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
      state.editContact = null;
    },
    [editContacts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.items = state.items.map(contact =>
        contact.id === action.payload.id ? action.payload : contact
      );
    },
    [editContacts.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { editContactsAction } = contactsSlice.actions;
