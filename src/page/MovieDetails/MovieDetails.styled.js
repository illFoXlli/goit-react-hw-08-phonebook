import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Img = styled.img`
  width: 250px;
  margin-right: 50px;
  margin-bottom: auto;
`;
export const DivCard = styled.div`
  display: flex;
  align-items: center;
`;
export const Wrapper = styled.div`
  display: block;
  width: 50px;
  height: 50px;
`;

export const Tital = styled.h2`
  color: tomato;
  margin-top: 25px;
  font-size: 24px;
  font-family: cursive;
  margin-bottom: 25px;
`;

export const ItemOne = styled.li`
  margin-left: 50px;
  font-size: 24px;
  font-family: cursive;
  font-weight: 800;
`;

export const LinkStyle = styled(NavLink)`
  color: grey;
  text-decoration-line: revert;
  &.active {
    color: rgb(255, 151, 0);
  }
  :focus-visible:not(.active),
  :hover:not(.active) {
    color: rgb(255, 151, 0);
    transform: scale(1.05);
  }
`;
