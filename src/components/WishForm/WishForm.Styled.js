import styled from '@emotion/styled';
import fonQw1x from '../../images/fonQw1x.webp';
import fonQw2x from '../../images/fonQw2x.webp';
import mfonQw1x from '../../images/mfonQw1x.webp';
import mfonQw2x from '../../images/mfonQw2x.webp';
import { Button } from 'components/Button';

export const WishFormBanner = styled('div')`
  width: 375px;
  height: 807px;
  background-image: url(${mfonQw1x});

  @media (min-resolution: 192dpi) {
    & {
      background-image: url(${mfonQw2x});
    }
  }
  margin-bottom: 100px;

  @media screen and (min-width: 1440px) {
    width: 1340px;
    height: 564px;
    background-image: url(${fonQw1x});

    @media (min-resolution: 192dpi) {
      & {
        background-image: url(${fonQw2x});
      }
    }
    margin-bottom: 120px;
    margin-left: -100px;
  }
`;

export const WishFormBox = styled('div')`
  padding: 56px 10px;
`;

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  width: 355px;
  height: 439px;

  @media screen and (min-width: 1440px) {
    width: 499px;
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
  width: 355px;
  font-size: 18px;

  @media screen and (min-width: 1440px) {
    width: 499px;
    font-size: 24px;
  }
`;
export const BoxText = styled('div')`
  width: 355px;
  height: 224px;
  margin-bottom: 32px;
  @media screen and (min-width: 1440px) {
    // position: absolute;
    // top: 204px;
    // left: 0px;
    width: 393px;
    height: 92px;
    margin-bottom: 0px;
  }
`;

export const Title = styled('h2')`
  font-family: JeffScript;
  font-weight: 400;
  font-size: 38.17px;
  line-height: 33.54px;
  text-align: center;
  color: ${p => p.theme.mainColors.grey};
  width: 348px;
  height: 92px;
  transform: rotate(-4deg);
  margin-bottom: 24px @media screen and (min-width: 1440px) {
    width: 492.35px;
    height: 130px;
    transform: rotate(-4.77deg);
    font-size: 54px;
  }
`;

export const Text = styled('p')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 16px;
  line-height: 20.8px;
  color: ${p => p.theme.mainColors.grey};
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 23.4px;
  }
`;
