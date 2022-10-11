import { InputFilter, Btn, InputNum, Box1} from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterContacts } from '../../redux/filter/filterSlicer';
import { useState } from 'react';
import {rondomPhone} from "../../utils/addContactsFunction"
import {addContacts, deleteContact} from "../../redux/contacts/contactsOpiretion"
import { getContacts } from 'redux/contacts/contactSelector';
import Box from 'components/service/Box';


const Filter = () => {
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  const contasts = useSelector(getContacts)

  const setFilters = e => {
    const { value } = e.target;
    dispatch(getFilterContacts(value));
  };

  const randomCont =  ()=>{
    rondomPhone(num, dispatch, addContacts)
  }

   

  const removeCont = () =>{
    contasts.forEach(contact=> dispatch(deleteContact(contact.id)))

  }

  return (
    <>
    <Box1>
      <InputFilter
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={setFilters}
      />
   <Box mt={2}>
    <InputNum type="number"  onChange={(e)=>{setNum(e.target.value)}}  />
    <Btn type='button' onClick={randomCont}>get my contacts</Btn>
    <Btn type='button' onClick={removeCont}>remove contacts</Btn>
    </Box>
    </Box1>
    </>
  );
};

export default Filter;
