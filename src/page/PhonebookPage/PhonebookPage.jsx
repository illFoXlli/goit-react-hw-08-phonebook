import ContactForm from '../../components/ContactForm';
import ContactsList from '../../components/ContactsList';
import Filter from '../../components/Filter';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOpiretion';
import {DivStuleWrraper, TitlePhonebook, Wrapper, WrapperCenter, TitleFilter} from "./PhonebookPage.styled"
import Container from "../../components/Container"







 const PhonebookPage = () => {
  const dispatch = useDispatch();
  // const { status, error } = useSelector(state => state.contacts);

 
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <DivStuleWrraper
        style={{
         
        }}
      >
        <WrapperCenter>
        <Wrapper>
          <TitlePhonebook>Phonebook</TitlePhonebook>
          <ContactForm />
          <TitleFilter>Filter Contacts</TitleFilter>
          <Filter />
          {/* {status === 'loading' && <h2>Loading...</h2>}
          {error && <h2>An error occured: {error}</h2>} */}
        </Wrapper>
        <Wrapper> 
         
          
          <ContactsList />
        </Wrapper>
        </WrapperCenter>
      </DivStuleWrraper>
    </Container>
    
  );
};
export default PhonebookPage