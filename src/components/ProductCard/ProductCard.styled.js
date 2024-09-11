import styled from '@emotion/styled';
import { Button } from 'components/Button';

export const Img = styled('img')`
  width: 355px;
  height: 372px;
  object-fit: cover;
  @media screen and (min-width: 1440px) {
    width: 499px;
    height: 522px;
  }
`;

export const Title = styled('h2')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 21.94px;
  text-align: center;
  color: ${p => p.theme.mainColors.brown};
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    font-size: 42px;
    line-height: 51.19px;
    margin-bottom: 0;
  }
`;

export const Form = styled('form')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 21.94px;
  text-align: center;
  color: ${p => p.theme.mainColors.brown};
  }
`;

export const ButtonOrder = styled(Button)`
  width: 287px;
  height: 67px;
  background-color: ${p => p.theme.mainColors.brown};
  color: ${p => p.theme.mainColors.beige};
  transition: transform 100ms linear;
  &:hover,
  focus {
    transform: scale(1.1);
  }
`;
