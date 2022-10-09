import axios from 'axios';

axios.defaults.baseURL = 'https://633ac27fe02b9b64c616d824.mockapi.io';

export const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data.reverse();
};

export const deleteContacts = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

export const getAddContacts = async contact => {
  const { data } = await axios.post(`/contacts`, { ...contact });
  console.log(data);
  return data;
};

export const getEditContacts = async contact => {
  const params = { ...contact };
  const { data } = await axios.put(`/contacts/${contact.id}`, params);

  return data;
};
