import styled from 'styled-components';

export const ListCard = styled.ul`
  margin-left: auto;
  margin-right: auto;
  align-items: space-between;
  width: 130px;

  text-align: center;

  @media screen and (min-width: 768px) {
    width: 152px;
  }

  /* @media screen and (min-width: 1280px) {
    width: 290px;
  } */
`;

export const Img = styled.img`
  width: 100%;
  height: 151px;
  margin-right: auto;
  margin-left: auto;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }

  z-index: 10;

  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 141px;
    height: 178px;
  }

  /* @media screen and (min-width: 1280px) {
    width: 285px;
    height: 337px;
  } */
`;
export const Title = styled.h2`
  width: 130px;
  font-weight: 700;
  font-size: 12px;
  line-height: calc(17.07 / 14);
  margin-right: auto;
  margin-left: auto;
  min-height: 35px;
  text-shadow: 1px 1px 2px black;
  @media screen and (min-width: 768px) {
    width: 152px;
    font-size: 16px;
    line-height: calc(19.5 / 16);
  }

  /* @media screen and (min-width: 1280px) {
    width: 288px;
    font-size: 20px;
    min-height: auto;
  } */
`;
export const Span = styled.span`
  margin-right: auto;
  margin-left: auto;
  color: var(--primary-white-text-color);
  font-size: 14px;
  line-height: calc(17.07 / 14);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(19.5 / 14);
  }

  /* @media screen and (min-width: 1280px) {
    width: 288px;
  } */
`;
export const SpanCharacter = styled.span`
  width: 130px;
  font-weight: 700;
  font-size: 12px;
  line-height: calc(17.07 / 14);
  margin-right: auto;
  margin-left: auto;
  min-height: 35px;
  text-shadow: 1px 0 1px rgb(241, 109, 183);

  @media screen and (min-width: 768px) {
    width: 152px;
    font-size: 16px;
    line-height: calc(19.5 / 16);
  }
`;
