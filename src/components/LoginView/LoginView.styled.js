import styled from 'styled-components';
import { Link } from "react-router-dom";

export const SubmitForm = styled.form`
  padding: 15px;
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    width: 350px;
    margin: 0 auto;
    align-items: center;
    margin-top: 30px;
`

export const Label = styled.label`
margin-bottom: 15px;
  text-shadow: 1px 1px 1px silver, -1px 1px 1px silver;
  color: white;
  font-size: 22px;
`
 
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

    width: 300px;
    text-align: center;
`

export const Message = styled.span`
padding-top: 10px;
    display: block;
    color: white;
    font-weight: 700;

`

export const Btn = styled.button`
    text-decoration: none;
    display: inline-block;
    color: white;
    padding: 5px 10px;
    margin: 10px;
    border-radius: 10px;
    font-family: "Montserrat", sans-serif;
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
`

export const LinkNewStyled = styled(Link)`
    padding-top: 8px;
    text-decoration: none;
    font-size: 12px;
    width: 350px;
    height: 30px;
    border-radius: 5px;
    text-transform: none;
    margin: 0 auto;
    background-image: linear-gradient(
      to right,
      #eaf818 0%,
    #ff970c 51%,
    #eaf818 100%
    );
    
`
export const Span = styled.span`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
`

  

  


  
