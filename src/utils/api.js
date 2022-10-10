import axios from 'axios';

const setContactsBaseURL = () => {
  axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
};

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const postRegister = async credentials => {
  setContactsBaseURL();

  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postLogIn = async credentials => {
  setContactsBaseURL();
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postLogOut = async () => {
  setContactsBaseURL();
  try {
    const { data } = await axios.post('/users/logout');
    token.unset(data.token);
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchCurrentUser = async (tokenState) => {
  setContactsBaseURL();
  try {
  axios.defaults.headers.common = {'Authorization': `Bearer ${tokenState}`}
    const { data } = await axios.get(`/users/current`);
    token.set(tokenState);
    return data;
  } catch (error) {
    throw error;
  }
};

/////////////////////////////////////////////////////////////

export const getContacts = async () => {
  setContactsBaseURL();
  try {
    const { data } = await axios.get(`/contacts`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAddContacts = async credentials => {
  setContactsBaseURL();
  try {
    const { data } = await axios.post(`/contacts`, credentials);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getDeleteContacts = async id => {
  try {
    await axios.delete(`/contacts/${id}`);
  } catch (error) {
    throw error;
  }
};

export const getEditContacts = async contact => {
  const params = { name: contact.name, number: contact.number };
  try {
    const { data } = await axios.patch(`/contacts/${contact.id}`, params);
    return data;
  } catch (error) {
    throw error;
  }
};

