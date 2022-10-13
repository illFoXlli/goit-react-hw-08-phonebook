import styled from 'styled-components';
import  { keyframes } from 'styled-components'

const trackingInExpand = keyframes`
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }

`

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: inear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+; */
  background-image: url('https://bing.ioliu.cn/v1/rand?w=1280&h=768');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: unset;
`;

export const InFact = styled.h1`
  text-align: center;
  text-shadow: 0 0 2px #fff;

  animation: ${trackingInExpand} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
`;


  
  