import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Btn = styled.button`
    cursor: pointer;
    text-decoration: none;
    
    display: inline-block;
    color: white;
    
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
    border: 2px solid rgb(188, 188, 188);

    :hover {
    background-position: right center;
   
  }
` 

  export const Name = styled.span`
     font-size: 20px;
     text-shadow: 1px 1px 1px black;
     display: flex;
    align-items: center;

  `

export const LinkStyle = styled(NavLink)`
 text-decoration: none;
    font-family: "Lobster",cursive;
    font-size: 25px;
    color: #000;
    align-self: center;
`
export const Wrapper = styled.div`
gap: 20px;
display: flex ;
align-items: center;
`
export const Img = styled.img`
width: 50px ;
height: 50px;
border-radius: 50% ;
border: 1px solid  rgba(205, 124, 7, 0.52);
box-shadow: 0px 0px 20px 12px rgba(205, 124, 7, 0.52) inset;
box-shadow: 0px 0px 20px 12px rgba(205, 124, 7, 0.52);
`