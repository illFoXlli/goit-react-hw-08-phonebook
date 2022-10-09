import * as React from 'react';
import { useRef } from 'react';
import PropTypes from 'prop-types';

import { ContactsItem, IconButtonNew } from './Contacts.styled';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOpiretion';
// import { error } from '../utils/error';
import { BsFillAlarmFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { editContactsAction } from '../../redux/contacts/contactsSlicer';

const ContactsItemLi = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const { status } = useSelector(state => state.contacts);
  const toggle = useRef(null);

  const onClickDelete = e => {
    dispatch(deleteContact(id));
    toggle.current = id;
  };

  const onClickEdit = () => {
    dispatch(editContactsAction({ contact: { name, number, id } }));
  };

  return (
    <ContactsItem>
      <ul>
        <li>
          <p>{`${name}`} </p>
        </li>
        <li>
          <p>{`${number}`}</p>
        </li>
      </ul>

      {status === 'loading' && toggle.current === id ? (
        <Stack direction="row" spacing={1}>
          <IconButton
            id={id}
            disabled={status === 'loading'}
            aria-label="clock"
          >
            <BsFillAlarmFill size="36px" />
          </IconButton>
        </Stack>
      ) : (
        <>
          <Stack direction="row" spacing={1}>
            <IconButton
              id={id}
              disabled={status === 'loading'}
              aria-label="delete"
              onClick={onClickDelete}
            >
              <DeleteIcon />
            </IconButton>

            <IconButton
              id={id}
              disabled={status === 'loading'}
              aria-label="edit"
              onClick={onClickEdit}
            >
              <FiEdit />
            </IconButton>
          </Stack>
        </>
      )}
    </ContactsItem>
  );
};

export default ContactsItemLi;

ContactsItemLi.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
