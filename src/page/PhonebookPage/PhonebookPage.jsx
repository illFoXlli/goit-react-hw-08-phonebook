import ContactForm from '../../components/ContactForm';
import ContactsList from '../../components/ContactsList';
import Filter from '../../components/Filter';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOpiretion';
import {
  DivStuleWrraper,
  TitlePhonebook,
  Wrapper,
  WrapperCenter,
  TitleFilter,
} from './PhonebookPage.styled';
import Container from '../../components/Container';

const PhonebookPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <DivStuleWrraper style={{}}>
        <WrapperCenter>
          <Wrapper>
            <TitlePhonebook>Phonebook</TitlePhonebook>
            <ContactForm />
            <TitleFilter>Filter Contacts</TitleFilter>
            <Filter />
          </Wrapper>
          <Wrapper>
            <ContactsList />
          </Wrapper>
        </WrapperCenter>
      </DivStuleWrraper>
    </Container>
  );
};
export default PhonebookPage;
