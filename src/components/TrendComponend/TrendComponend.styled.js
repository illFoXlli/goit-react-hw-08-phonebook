import styled from 'styled-components';

export const ListCard = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  padding-bottom: 60px;
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 20px;

  @media screen and (min-width: 480px) {
    column-gap: 20px;
    row-gap: 10px;
  }
`;
