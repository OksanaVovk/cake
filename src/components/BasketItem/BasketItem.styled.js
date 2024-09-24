import styled from '@emotion/styled';

export const ItemBox = styled('li')`
  display: grid;
  grid-template-columns: 158px 147px 20px;
  grid-column-gap: 15px;
  width: 100%;
  margin-bottom: 30px;

  @media screen and (min-width: 1440px) {
    grid-template-columns: 286px 253px 25px;
    grid-column-gap: 30px;
    width: 624px;
    height: 300px;
  }
`;

export const BoxImg = styled('div')`
  width: 158px;
  height: 166px;

  @media screen and (min-width: 1440px) {
    width: 286px;
    height: 300px;
  }
`;

export const Img = styled('img')`
  display: block;
  min-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextBoxLarge = styled('div')`
  width: 168px;
  @media screen and (min-width: 1440px) {
    width: 253px;
  }
`;

export const ItemsName = styled('h2')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 17px;
  line-height: 20.72px;
  color: ${p => p.theme.mainColors.brown};
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 29.26px;
  }
`;

export const ItemsText = styled('p')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 13px;
  line-height: 14.08px;
  color: ${p => p.theme.mainColors.brown};
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 17.3px;
  }
`;

export const TextBox = styled('div')`
  display: grid;
  grid-template-columns: 85px 62px;
  margin-bottom: 16px;

  @media screen and (min-width: 1440px) {
    grid-template-columns: 120px 133px;
    margin-bottom: 24px;
  }
`;

export const TextBoxLast = styled(TextBox)`
  margin-bottom: 0;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const DeleteSvg = styled('svg')`
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.mainColors.brown};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    fill: ${p => p.theme.mainColors.accent};
  }
  @media screen and (min-width: 1440px) {
    width: 25px;
    height: 30px;
  }
`;

export const DeleteButton = styled('button')`
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    width: 25px;
    height: 30px;
  }
`;
