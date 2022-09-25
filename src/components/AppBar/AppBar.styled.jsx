import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import img from '../../imag/haeder/6-05.png';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    0deg,
    rgba(255, 215, 0, 1) 0%,
    rgba(0, 87, 184, 1) 100%
  );
  background-image: url(${img});
  background-size: contain, 100%;
  /* background-repeat: no-repeat; */
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 20px;
  margin-left: 20px;
`;

export const LinkItemNav = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  color: rgb(255, 151, 0);
  text-shadow: 1px 1px 2px black;

  /* font-size: 72px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */

  padding-top: 20px;
  padding-bottom: 50px;

  text-decoration: none;
  font-size: 34px;
  line-height: (40 / 34);
  letter-spacing: 0.02em;
  font-weight: 500;

  transition-property: color transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: #eaf818;
  }

  /* :focus-visible:not(.active),
  :hover:not(.active) {
    color: #eaf818;
    transform: scale(1.05);
  } */
`;
