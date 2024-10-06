import styled from '@emotion/styled';
import { Button } from 'components/Button';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

export const OrderFormLargeText = styled('p')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 18px;
  line-height: 21.95px;
  color: ${p => p.theme.mainColors.brown};
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 29.26px;
  }
`;

export const OrderFormLargeText1 = styled(OrderFormLargeText)`
  margin-bottom: 32px;
`;

export const OrderFormLargeText2 = styled(OrderFormLargeText)`
  margin-bottom: 0;
`;

export const ContactBox = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
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
  padding: 19px 24px;
  border: 0;
  border-radius: 10px;
  background-color: ${p => p.theme.mainColors.beige};
  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 499px;
    padding: 19px 30px;
  }
`;

export const RadioDiv = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }
`;
export const RadioDiv2 = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;
export const RadioInput = styled('input')`
  position: relative;
  width: 18px;
  height: 18px;
  outline: none;
  margin-right: 22px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    border: 2px solid ${p => p.theme.mainColors.beige};
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: ${p => p.theme.mainColors.beige};
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${p => p.theme.mainColors.brown};
    transform: translate(-50%, -50%);
    visibility: visible;
  }
`;

export const RadioLabel = styled('label')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 16px;
  color: ${p => p.theme.mainColors.brown};

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const AddressBox = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  @media screen and (min-width: 1440px) {
    width: 394px;
    margin-bottom: 48px;
  }
`;
export const AddressBoxSmall = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const AddressInput = styled('input')`
  width: 355px;
  height: 60px;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 18px;
  color: ${p => p.theme.mainColors.brown};
  padding: 19px 24px;
  border: 0;
  border-radius: 10px;
  background-color: ${p => p.theme.mainColors.beige};
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    width: 394px;
    padding: 19px 30px;
  }
`;

export const AddressInputSmall = styled('input')`
  width: 168px;
  height: 60px;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 18px;
  color: ${p => p.theme.mainColors.brown};
  padding: 19px 24px;
  border: 0;
  border-radius: 10px;
  background-color: ${p => p.theme.mainColors.beige};

  @media screen and (min-width: 1440px) {
    width: 182px;
    padding: 19px 30px;
  }
`;

export const TextAreaInput = styled('textarea')`
  width: 355px;
  min-height: 200px;
  height: 60px;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 18px;
  color: ${p => p.theme.mainColors.brown};
  padding: 19px 24px;
  border: 0;
  border-radius: 10px;
  background-color: ${p => p.theme.mainColors.beige};
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    width: 499px;
    padding: 19px 30px;
    margin-bottom: 72px;
  }
`;

export const ResultBox = styled('div')`
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: solid 1px ${p => p.theme.mainColors.beige};
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    padding-top: 24px;
    width: 606px;
    margin-bottom: 64px;
  }
`;

export const OrderFormBoldText = styled('p')`
  font-family: Montserrat Bold, sans-serif;
  font-weight: 800;
  text-align: left;
  font-size: 18px;
  line-height: 21.95px;
  color: ${p => p.theme.mainColors.brown};
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 29.26px;
  }
`;

export const ButtonOrder = styled(Button)`
  width: 355px;
  height: 67px;
  font-size: 18px;
  text-transform: uppercase;

  transition: transform 100ms linear;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  @media screen and (min-width: 1440px) {
    width: 499px;
    font-size: 24px;
  }
`;

export const ErrorText = styled('p')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 16px;
  line-height: 20.8px;
  color: red;
  margin-top: -20px;
  margin-bottom: 10px;
  @media screen and (min-width: 1440px) {
    width: 393px;

    font-size: 18px;
    line-height: 23.4px;
  }
`;

export const ErrorTextDate = styled('p')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 16px;
  line-height: 20.8px;
  color: red;
  margin-top: 5px;
  @media screen and (min-width: 1440px) {
    width: 393px;

    font-size: 18px;
    line-height: 23.4px;
  }
`;

export const InputDatePicker = styled(DatePicker)`
  width: 355px;
  height: 60px;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 18px;
  color: ${p => p.theme.mainColors.brown};
  padding: 19px 24px;
  border: 0;
  border-radius: 10px;
  background-color: ${p => p.theme.mainColors.beige};

  .react-date-picker__wrapper {
    border: none;
  }

  .react-date-picker__clear-button {
    display: none;
  }
  @media screen and (min-width: 1440px) {
    width: 499px;
    padding: 19px 30px;
  }
`;
