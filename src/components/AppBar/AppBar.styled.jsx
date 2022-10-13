import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import img from '../../imag/haeder/6-05.png';

export const HeaderStyled = styled.header`
  /* background-repeat: no-repeat; */
  background-image: url(${img});
  background-size: contain, 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    background: linear-gradient(
      0deg,
      rgba(255, 215, 0, 1) 0%,
      rgba(0, 87, 184, 1) 100%
    );
    background-image: url(${img});
    background-size: contain, 100%;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 20px;
  margin-left: 20px;
`;

export const LinkItemNav = styled(NavLink)`
  display: inline-flex;
  align-items: center;

  color: #eaf818;
  text-shadow: 1px 1px 2px black;

  padding-top: 12px;
  padding-bottom: 12px;
  margin-left: 15px;

  text-decoration: none;
  font-size: 18px;
  line-height: (16 / 12);
  letter-spacing: 0.02em;
  font-weight: 400;

  transition-property: color transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: rgb(255, 151, 0);
  }

  :focus-visible:not(.active),
  :hover:not(.active) {
    color: rgb(255, 151, 0);
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    
  color: #eaf818;
  text-shadow: 1px 1px 2px black;

  padding-top: 25px;
  padding-bottom: 25px;
  margin-left: 8px;

  text-decoration: none;
  font-size: 18px;
  line-height: (36 / 24);
  letter-spacing: 0.02em;
  font-weight: 500;
  }

  @media screen and (min-width: 1280px) {
    color: #eaf818;
  text-shadow: 1px 1px 2px black;

  padding-top: 25px;
  padding-bottom: 25px;
  margin-left: 15px;

  text-decoration: none;
  font-size: 34px;
  line-height: (40 / 34);
  letter-spacing: 0.02em;
  font-weight: 500;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  color: tomato;

  margin-right: 30px;
  margin-top: 0px;

  align-items: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const WrapperHome = styled.div`
  display: flex;
  
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    display: flex;
  margin-left: 30px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
