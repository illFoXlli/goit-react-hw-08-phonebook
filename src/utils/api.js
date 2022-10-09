import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
   return axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    return  axios.defaults.headers.common.Authorization = '';
  }
}
///////////////////////////////////////////////////////////
export const postRegister = async (credentials) => {
  const { data } = await axios.post('/users/signup',credentials);
  console.log(data.token);
  token.set(data.token)
  return data;
};

export const postLogIn = async (credentials) => {
  const { data } = await axios.post('/users/login',credentials);
  console.log(data.token);
  console.log(data);
  token.set(data.token)
  return data;
};

export const postLogOut = async (token) => {
  token.set(token)
  const { data } = await axios.post('/users/logout');
  token.unset(data.token)
  return data;
};
/////////////////////////////////////////////////////////////


export const getContacts = async () => {
  const { data } = await axios.get(`/contacts`);
  token.set(data.token)
  console.log(data);
  return data;
};

export const getAddContacts = async (credentials) => {
  const { data } = await axios.post(`/contacts`, credentials);
  token.set(data.token)
  console.log(data);
  return data;
};


// export const deleteContacts = async id => {
//   const { data } = await axios.delete(`/contacts/${id}`);
//   return data;
// };

// export const getAddContacts = async contact => {
//   const { data } = await axios.post(`/contacts`, { ...contact });
//   console.log(data);
//   return data;
// };

// export const getEditContacts = async contact => {
//   const params = { ...contact };
//   const { data } = await axios.put(`/contacts/${contact.id}`, params);

//   return data;
// };
