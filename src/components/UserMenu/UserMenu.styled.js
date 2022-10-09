import styled from 'styled-components';

export const Btn = styled.button`
cursor: pointer;
text-decoration: none;
    display: inline-block;
    color: white;
    margin-left: 15px;
    border-radius: 10px;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    font-size: 12px;
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
    height: 25px;

    :hover {
    background-position: right center;
  }
` 

  export const Name = styled.span`
     font-size: 13px;
  `
  
