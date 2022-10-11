import styled from 'styled-components';

import Button from '@mui/material/Button';

export const FormSubmit = styled.form`
margin-top:20px;
  margin-left: 20px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 170px;
  padding: 20px;
  border: 2px solid rgb(255, 99, 71);
  box-shadow: 0px 2px 8px 0px rgba(227, 102, 212, 0.2);
  background-color:   rgba(169, 170, 174 .4);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  pointer-events: auto;
`;

const LabelForm = styled.label`
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin: 10px 0 20px;
  border: 1.5px solid rgb(27, 30, 40);
  border-radius: 5px;
  padding: 10px;
  :focus {
    border: 2px solid rgb(212, 52, 212);
    border-radius: 5px;
    box-shadow: 0px 2px 8px 0px rgba(227, 102, 212, 0.2);
  }
`;
export const LabelName = styled(LabelForm)``;
export const LabelNumber = styled(LabelForm)``;

export const Input = styled.input``;
export const ButtonSubmit = styled(Button)`
  :hover {
    background-color: rgba(255, 99, 71, .4);
    color: white;
  }
  color: black;
  padding: 10px;
`;


