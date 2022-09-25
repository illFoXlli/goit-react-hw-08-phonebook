import styled from 'styled-components';

export const ContainerSteled = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 320px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
    max-width: 1280px;
  }
`;
