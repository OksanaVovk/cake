import { useSelector, useDispatch } from 'react-redux';
import { toggleOrder } from '../../redux/modalSlice';
import { selectors } from '../../redux/selectors';
import {
  OrderFormLargeText,
  OrderFormLargeText1,
  OrderFormLargeText2,
  OrderFormBoldText,
  ContactBox,
  Input,
  RadioInput,
  RadioLabel,
  RadioDiv,
  RadioDiv2,
  AddressInput,
  AddressInputSmall,
  AddressBoxSmall,
  AddressBox,
  TextAreaInput,
  ResultBox,
  ButtonOrder,
} from './OrderForm.styled';
export const OrderForm = () => {
  const basketData = useSelector(selectors.selectBasketProdukts);
  const dispatch = useDispatch();
  const totalPr = basketData.reduce((total, prod) => {
    return total + prod.sum;
  }, 0);

  const onBtnClick = event => {
    event.preventDefault();
    console.log('click');
    try {
      dispatch(toggleOrder(true));
    } catch {
      console.log(Error);
    }
  };

  return (
    <>
      <form onSubmit={onBtnClick}>
        <ContactBox>
          <OrderFormLargeText1 className="text1">Контакти:</OrderFormLargeText1>
          <Input type="text" placeholder="Ім'я" />
          <Input type="tel" placeholder="Номер телефону" />
          <Input type="email" placeholder="E-mail" />
          <Input
            id="date"
            type="text"
            onFocus={e => (e.target.type = 'date')}
            onBlur={e => (e.target.type = 'text')}
            placeholder="Дата доставки"
          />
        </ContactBox>
        <RadioDiv>
          <OrderFormLargeText>Спосіб доставки:</OrderFormLargeText>
          <RadioLabel>
            <RadioInput type="radio" name="delivery" value="self" />
            Самовивіз
          </RadioLabel>
          <RadioLabel>
            <RadioInput
              type="radio"
              name="delivery"
              value="taxi"
              defaultChecked
            />
            На таксі (за тарифами служби таксі)
          </RadioLabel>
        </RadioDiv>
        <AddressBox>
          <AddressInput type="text" placeholder="Місто" />
          <AddressInput type="text" placeholder="Вулиця" />
          <AddressBoxSmall>
            <AddressInputSmall type="text" placeholder="Будинок" />
            <AddressInputSmall type="number" placeholder="Квартира" />
          </AddressBoxSmall>
        </AddressBox>
        <RadioDiv2>
          <OrderFormLargeText>Спосіб оплати:</OrderFormLargeText>
          <RadioLabel>
            <RadioInput type="radio" name="pay" value="cash" defaultChecked />
            Готівка
          </RadioLabel>
          <RadioLabel>
            <RadioInput type="radio" name="pay" value="cashless" />
            Оплата на розрахунковий рахунок
          </RadioLabel>
        </RadioDiv2>
        <TextAreaInput
          name="comment"
          rows="5"
          placeholder="Додати коментар"
        ></TextAreaInput>

        <ResultBox>
          <OrderFormLargeText2 className="text2">
            Всього до сплати:
          </OrderFormLargeText2>
          <OrderFormBoldText>{totalPr} грн</OrderFormBoldText>
        </ResultBox>
        <ButtonOrder type="submit" text="Оформити замовлення" />
      </form>
    </>
  );
};
