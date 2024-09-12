import styled from '@emotion/styled';
import { Button } from 'components/Button';

export const GeneralDiv = styled('div')`
  width: 100%;
  margin-bottom: 100px;
  @media screen and (min-width: 1440px) {
    padding-right: 100px;
  }
`;

export const ProductCardDiv = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    position: relative;
    width: 1140px;
    height: 522px;
  }
`;

export const Img = styled('img')`
  width: 355px;
  height: 372px;
  object-fit: cover;
  margin-bottom: 25px;
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 499px;
    height: 522px;
    margin-bottom: 0;
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
    position: absolute;
    top: 0;
    left: 533px;
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
  text-align: left;
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
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 400px;
    left: 850px;
  }
`;

export const SelectDiv = styled('div')`
  display: flex;
  padding: 19px 15px 19px 30px;
  justify-content: center;
  align-items: center;
  width: 288px;
  height: 60px;
  background-color: ${p => p.theme.mainColors.beige};
  border-radius: 10px;
  border: 0;
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 260px;
    left: 533px;
    margin-bottom: 0;
  }
`;

export const Select = styled('select')`
  background-color: transparent;
  border: 0;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 21.94px;
  text-align: left;
  color: ${p => p.theme.mainColors.brown};
`;

export const PieceDiv = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    position: absolute;
    top: 260px;
    left: 533px;
    margin-bottom: 0;
  }
`;
export const PieceInputDiv = styled('label')`
  display: flex;
  padding: 19px 15px 19px 30px;
  width: 288px;
  height: 60px;
  background-color: ${p => p.theme.mainColors.beige};
  border-radius: 10px;
  border: 0;
  margin-bottom: 10px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    margin-right: 60px;
  }
`;

export const Piece = styled('input')`
  width: 80px;
  height: 60px;
  font-size: 20px;
  text-align: center;
  background-color: transparent;
  border-radius: 10px;
  @media screen and (min-width: 1440px) {
    // position: absolute;
    // top: 0;
    // left: 350px;
  }
`;

export const LabelDiv2 = styled(PieceInputDiv)`
  margin-bottom: 10px;
  @media screen and (min-width: 1440px) {
    // position: absolute;
    // top: 0;
    // left: 0;
    margin-bottom: 0;
    margin-right: 60px;
  }
`;

export const PriceDiv = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    position: absolute;
    top: 170px;
    left: 533px;
    margin-bottom: 0;
  }
`;

export const PriceLittleDiv = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  @media screen and (min-width: 1440px) {
    width: 100px;
    height: 60px;
    // position: absolute;
    // top: 0px;
    // left: 350px;
  }
`;
export const Prise = styled('input')`
width: 45px;
font-size: 20px;
background-color: transparent;
border: 0;
  }
`;

export const SumDiv = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    width: 100px;
    height: 60px;
    position: absolute;
    top: 398px;
    left: 540px;
    margin-bottom: 0;
  }
`;

export const Sum = styled('input')`
  width: 50px;
  font-size: 24px;
  font-weight: 600;
  background-color: transparent;
  border: 0;
`;
