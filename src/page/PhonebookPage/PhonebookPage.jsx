import ContactForm from '../../components/ContactForm';
import ContactsList from '../../components/ContactsList';
import Filter from '../../components/Filter';
import Wrapper from '../../components/Wrapper';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOpiretion';




 const Phonebook = () => {
  const dispatch = useDispatch();
  // const { status, error } = useSelector(state => state.contacts);

 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
        }}
      >
        <Wrapper>
          <h2>Phonebook</h2>
          <ContactForm />
          <h2>Filter Contacts</h2>
          <Filter />
          {/* {status === 'loading' && <h2>Loading...</h2>}
          {error && <h2>An error occured: {error}</h2>} */}
        </Wrapper>
        <Wrapper>
          <ContactsList />
        </Wrapper>
      </div>
    </>
  );
};
export default Phonebook