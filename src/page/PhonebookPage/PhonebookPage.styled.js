import styled from 'styled-components';
import fon from '../../imag/pexels-fauxels-3183198.jpg';

export const DivStuleWrraper = styled.div`
width:100% ;
height:100vh ;
  /* display: flex; */
  /* justify-content: center; */
  /* gap: 10px; */
  /* justifycontent: center; */
  background-image: url(${fon});
  background-size: cover ;
  margin-top: -134px ;
`;
export const TitlePhonebook = styled.h2`

    margin-top: 135px;
    pointer-events: auto;
    text-align: center;
    margin-bottom: 30px;

    text-shadow: 1px 2px 5px black;
    color: rgb(255, 99, 71);
    font-size: 32px ;
`
export const TitleFilter = styled.h2`

    margin-top: 20px;
    text-align: center;
    margin-bottom: 20px;
    pointer-events: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;

    text-shadow: 1px 2px 5px black;
color: rgb(255, 99, 71);
font-size: 32px ;


`  

export const Wrapper = styled.div`
height:100vh ;
margin-top: auto;
margin-bottom: auto;
  width: 460px;
  padding: 0 20px;
  pointer-events: none
  `
  export const WrapperCenter = styled.div`
  display: flex;
  justify-content:center;
  /* width: 800px;
  margin-left: auto;
  margin-right:auto; */
  `