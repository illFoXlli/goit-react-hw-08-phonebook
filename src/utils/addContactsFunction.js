import { getAddContacts } from './api.js';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function pass_str(len) {
  let chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ';
  let str = '';
  for (let i = 0; i < len; i++) {
    let pos = Math.floor(Math.random() * chrs.length);
    str += chrs.split("").reverse().join("").substring(pos, pos + 1);
  }
  let str2 = '';
  for (let i = 0; i < len; i++) {
    let pos1 = Math.floor(Math.random() * chrs.length);
    str2 += chrs.substring(pos1, pos1 + 1);
  }
  str = str.toLowerCase()
  str2 = str.toLowerCase()
  return str[0].toUpperCase() + str.slice(1) + " " + str2[0].toUpperCase() + str2.slice(1);
}
function pass_num(len) {
  let chrs = '0123456789';
  let str = '';
  for (let i = 0; i < 1; i++) {
    let pos = Math.floor(Math.random() * chrs.length);
    str += chrs.substring(pos, pos + 1);
  }
  return `0${str}${ Math.floor(Math.random() * 9)}-${ Math.floor(Math.random() * 9)}${ Math.floor(Math.random() * 9)}${ Math.floor(Math.random() * 9)}-${ Math.floor(Math.random() * 9)}${ Math.floor(Math.random() * 9)}${ Math.floor(Math.random() * 9)}-${ Math.floor(Math.random() * 9)}${ Math.floor(Math.random() * 9)}${ Math.floor(Math.random() * 9)}`;
}
//////////////////////////////////////
export  const rondomPhone = (n, dispatch, action ) => {
  try {
    let i = 0;
    while (n > i) {
      const obj = {
        name: pass_str(getRandomArbitrary(5, 10)),
        number: pass_num(getRandomArbitrary(5, 10)),
      };
      dispatch(action(obj))
      i++;
    }
  } catch (error) {
    console.log(error);
  }
};
/////////////////////////////////////////////////
