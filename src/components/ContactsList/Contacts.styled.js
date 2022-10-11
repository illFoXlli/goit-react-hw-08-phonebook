import IconButton from '@mui/material/IconButton';
import styled, { keyframes } from 'styled-components';

export const Contacts = styled.ul`
  padding: 0;
  margin: 0;
  margin-bottom: 8px;

  max-height: 350px;

  overflow-y: scroll;
  scroll-behavior: smooth;
  list-style: none;
  border-radius: 5px;

  margin-top: 202px;
  padding: 20px;
  

  border: 2px solid rgb(255, 99, 71);
  box-shadow: 0px 2px 8px 0px rgba(227, 102, 212, 0.2);
  background-color:   rgba(169, 170, 174 .4);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  pointer-events: auto;
`;

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  border-radius: 5px;
  margin: 0 0 0 50px;
  cursor: pointer;
  border: 2px solid purple;

  :hover,
  :focus {
    background-color: rgb(79, 76, 255);
    color: white;
    box-shadow: 0px 4px 16px 0px rgba(227, 102, 212, 0.2);
  }
  :active {
    background-color: rgb(76, 103, 255);
  }
`;

export const IconButtonNew = styled(IconButton)`
  margin-right: 20px;
`;

//
