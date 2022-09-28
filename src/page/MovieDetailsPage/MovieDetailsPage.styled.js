import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Img = styled.img`
  width: 180px;
  margin-right: 20px;
  margin-bottom: auto;
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
    width: 180px;
    margin-right: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 250px;
    margin-right: 50px;
  }
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
  font-family: cursive;
  font-weight: 600;
  font-size: 12px;
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 800;
    font-size: 24px;
  }
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

export const ListLink = styled.ul`
  display: flex;
  justify-content: space-around;
  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
    gap: 50px;
  }
`;
