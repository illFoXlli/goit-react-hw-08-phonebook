import * as React from 'react';
import { Contacts } from './Contacts.styled';
import { useSelector } from 'react-redux';

import { lowerCaseValue } from '../../utils/utilits';
import ContactsItemLi from './ContactsItem';
import { getContacts } from '../../redux/contacts/contactSelector';
import { getFilter } from '../../redux/filter/filterSelector';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  let filterInput = contacts.filter(
    item =>
      lowerCaseValue(item.name).includes(lowerCaseValue(filter)) ||
      item.number.includes(filter)
  );

  if (filterInput.length) {
    return (
      <Contacts>
        {filterInput.map(contact => {
          return <ContactsItemLi contact={contact} key={contact.id} />;
        })}
      </Contacts>
    );
  } else {
    
    return <h2>List is empty</h2>;
  }
};

export default ContactsList;
