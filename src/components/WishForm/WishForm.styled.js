import styled from '@emotion/styled';
import fonQw1x from '../../images/fonQw1x.webp';
import fonQw2x from '../../images/fonQw2x.webp';
import mfonQw1x from '../../images/mfonQw1x.webp';
import mfonQw2x from '../../images/mfonQw2x.webp';
import { Button } from 'components/Button';

export const WishFormGBox = styled('div')`
margin: 0px -10px 100px -10px;
width: 375px;
height: 807px;
  @media screen and (min-width: 1440px) {
    position: relative;
    width: 1440px;
    height: 564px;
    margin-bottom: 100px;
`;

export const WishFormBanner = styled('div')`
  width: 375px;
  height: 807px;
  background-image: url(${mfonQw1x});

  @media (min-resolution: 192dpi) {
    & {
      background-image: url(${mfonQw2x});
    }
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    left: -100px;
    width: 1340px;
    height: 564px;
    background-image: url(${fonQw1x});

    @media (min-resolution: 192dpi) {
      & {
        background-image: url(${fonQw2x});
      }
    }
`;

export const WishFormBox = styled('div')`
  padding: 56px 10px;
  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`;

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  width: 355px;
  height: 439px;

  @media screen and (min-width: 1440px) {
    width: 499px;
    position: absolute;
    top: 62px;
    right: 100px;
  }
`;

export const Input = styled('input')`
  width: 355px;
  height: 60px;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 18px;
  color: ${p => p.theme.mainColors.brown};
  padding: 19px 21px;
  border: 0;
  border-radius: 10px;
  margin-bottom: 24px;
  background-color: ${p => p.theme.mainColors.grey};

  @media screen and (min-width: 1440px) {
    width: 499px;
    padding: 19px 32px;
  }
`;

export const Textarea = styled('textarea')`
  width: 355px;
  height: 180px;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 18px;
  color: ${p => p.theme.mainColors.brown};
  padding: 19px 21px;
  border: 0;
  border-radius: 10px;
  margin-bottom: 24px;
  background-color: ${p => p.theme.mainColors.grey};

  @media screen and (min-width: 1440px) {
    width: 499px;
    padding: 19px 32px;
  }
`;

export const ButtonForm = styled(Button)`
  transition: transform 100ms linear;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  width: 355px;
  font-size: 18px;

  @media screen and (min-width: 1440px) {
    width: 499px;
    font-size: 24px;
  }
`;

export const BoxText = styled('div')`
  position: relative;
  top: 10px;
  left: 0.7px;
  width: 355px;
  height: 224px;
  margin-bottom: 32px;
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 80px;
    left: 100px;
    width: 501.46px;
    height: 286.51px;
    margin-bottom: 0px;
  }
`;

export const Title = styled('h2')`
  position: absolute;
  top: 12px;
  left: 0.7px;
  font-family: JeffScript;
  font-weight: 400;
  font-size: 38.17px;
  line-height: 48px;
  text-align: left;
  color: ${p => p.theme.mainColors.grey};
  width: 348px;
  height: 92px;
  transform: rotate(-4deg);
  @media screen and (min-width: 1440px) {
    top: 20px;
    left: 0;
    width: 492.35px;
    height: 130px;
    font-size: 54px;
    line-height: 65px;
    transform: rotate(-4.77deg);
  }
`;

export const Text = styled('p')`
  position: absolute;
  left: 0.71px;
  bottom: 0;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 16px;
  line-height: 20.8px;
  color: ${p => p.theme.mainColors.grey};
  @media screen and (min-width: 1440px) {
    left: 0.71px;
    bottom: 0;
    width: 393px;
    height: 92px;
    font-size: 18px;
    line-height: 23.4px;
  }
`;
