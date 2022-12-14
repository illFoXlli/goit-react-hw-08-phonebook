import styled from 'styled-components';

export const SubmitForm = styled.form`

  padding: 15px;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  max-width: 350px;
  margin: 0 auto;
  align-items: center;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    width: 350px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Label = styled.label`
  margin-bottom: 15px;
  text-shadow: 1px 1px 1px silver, -1px 1px 1px silver;
  color: white;
  font-size: 22px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 15px;
  border: 10px solid rgba 255, 255, 255, 0.5;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25) inset,
    0 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: rgba 255, 255, 255, 0.5;
  appearance: none;
  outline: none;
  color: #4a4252;
  margin-left: 5px;
  width: 300px;
  text-align: center;
`;

export const Btn = styled.button`
  text-decoration: none;
  display: inline-block;
  color: white;
  padding: 5px 10px;
  margin: 10px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(
    to right,
    #eaf818 0%,
    #ff970c 51%,
    #eaf818 100%
  );
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  width: 100px;
  height: 30px;

  :hover {
    background-position: right center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;
