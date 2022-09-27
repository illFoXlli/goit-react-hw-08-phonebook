import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 320px;

  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  display: inline-block;
  width: 80px;
  height: 35px;
  font-size: 24px;
  border: 1px solid #808080;
  border-radius: 0 10px 10px 0;
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
export const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
export const Input = styled.input`
  display: inline-block;
  width: 250px;
  height: 32px;
  font: inherit;
  font-size: 20px;
  border: 1px solid #808080;
  border-radius: 10px 0 0 10px;

  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

// .SearchForm-input::placeholder {
//   font: inherit;
//   font-size: 14px;
// }
export const ListCard = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  padding-bottom: 60px;
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 20px;

  @media screen and (min-width: 480px) {
    column-gap: 20px;
    row-gap: 10px;
  }
`;
