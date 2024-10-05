import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { sentEmail } from 'components/utils/sendForm';
import { toggleOrder } from '../../redux/modalSlice';
import { selectors } from '../../redux/selectors';
import { clearBasketState } from '../../redux/basketSlice';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { orderSchema } from '../../components/utils/schemas';
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
  ErrorText,
} from './OrderForm.styled';

const formDataInitialState = {
  username: '',
  phone: '',
  email: '',
  date: '',
  delivery: 'taxy',
  city: '',
  street: '',
  house: '',
  apartment: '',
  pay: 'cash',
  comment: '',
};

export const OrderForm = () => {
  const [formData, setFormData] = useState(formDataInitialState);
  const [startDate, setStartDate] = useState(new Date());
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const handleChange = event => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const reset = () => {
    setFormData(formDataInitialState);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      let validForm = await orderSchema.isValid(formData);
      if (validForm) {
        try {
          sentEmail(event);
          setError([]);
          dispatch(clearBasketState());
          dispatch(toggleOrder(true));
          // submit the form
        } catch (err) {
          Notify.warning(
            'Виникла помилка, спробуйте оформити замовлення пізніше'
          );
        }
      } else {
        await orderSchema.validate(formData, {
          abortEarly: false,
        });
      }
    } catch (err) {
      const errorAr = err.inner.reduce((newAr, item) => {
        newAr.push({ name: item.params.path, message: item.errors });
        return newAr;
      }, []);
      setError(errorAr);
    }
    reset();
  };
  const basketData = useSelector(selectors.selectBasketProdukts);
  const dispatch = useDispatch();
  const totalPr = basketData.reduce((total, prod) => {
    return total + prod.sum;
  }, 0);
  totalPr === 0 && navigate('/catalog', { replace: true });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ContactBox>
          <OrderFormLargeText1 className="text1">Контакти:</OrderFormLargeText1>
          <Input
            type="text"
            name="username"
            onChange={handleChange}
            value={formData.username}
            required
            placeholder="Ім'я*"
          />
          {error.map(
            er =>
              er.name === 'username' && (
                <ErrorText className="error">{er.message[0]}</ErrorText>
              )
          )}
          <Input
            onChange={handleChange}
            value={formData.phone}
            type="tel"
            name="phone"
            required
            placeholder="Номер телефону*"
          />
          {error.map(
            er =>
              er.name === 'phone' && (
                <ErrorText className="error">{er.message[0]}</ErrorText>
              )
          )}
          <Input type="email" name="email" placeholder="E-mail" />
          {error.map(
            er =>
              er.name === 'email' && (
                <ErrorText className="error">{er.message[0]}</ErrorText>
              )
          )}
          <DatePicker
            showIcon
            selected={startDate}
            onChange={date => setStartDate(date)}
          />

          <Input
            id="date"
            type="text"
            name="date"
            required
            onChange={handleChange}
            value={formData.date}
            onFocus={e => (e.target.type = 'date')}
            onBlur={e => (e.target.type = 'text')}
            placeholder="Дата доставки*"
          />
          {error.map(
            er =>
              er.name === 'date' && (
                <ErrorText className="error">{er.message[0]}</ErrorText>
              )
          )}
        </ContactBox>
        <RadioDiv>
          <OrderFormLargeText>Спосіб доставки:</OrderFormLargeText>
          <RadioLabel>
            <RadioInput
              type="radio"
              name="delivery"
              value="self"
              onChange={handleChange}
            />
            Самовивіз
          </RadioLabel>
          <RadioLabel>
            <RadioInput
              type="radio"
              name="delivery"
              value="taxi"
              onChange={handleChange}
              defaultChecked
            />
            На таксі (за тарифами служби таксі)
          </RadioLabel>
        </RadioDiv>
        <AddressBox>
          <AddressInput
            type="text"
            name="city"
            placeholder="Місто"
            onChange={handleChange}
            value={formData.city}
          />
          {error.map(
            er =>
              er.name === 'city' && (
                <ErrorText className="error">{er.message[0]}</ErrorText>
              )
          )}
          <AddressInput
            type="text"
            name="street"
            placeholder="Вулиця"
            onChange={handleChange}
            value={formData.street}
          />
          {error.map(
            er =>
              er.name === 'street' && (
                <ErrorText className="error">{er.message[0]}</ErrorText>
              )
          )}
          <AddressBoxSmall>
            <AddressInputSmall type="text" name="house" placeholder="Будинок" />
            <AddressInputSmall
              type="number"
              name="apartment"
              placeholder="Квартира"
              onChange={handleChange}
              value={formData.apartment}
            />
            {error.map(
              er =>
                er.name === 'apartment' && (
                  <ErrorText className="error">{er.message[0]}</ErrorText>
                )
            )}
          </AddressBoxSmall>
        </AddressBox>
        <RadioDiv2>
          <OrderFormLargeText>Спосіб оплати:</OrderFormLargeText>
          <RadioLabel>
            <RadioInput
              type="radio"
              name="pay"
              value="cash"
              defaultChecked
              onChange={handleChange}
            />
            Готівка
          </RadioLabel>
          <RadioLabel>
            <RadioInput
              type="radio"
              name="pay"
              value="cashless"
              onChange={handleChange}
            />
            Оплата на розрахунковий рахунок
          </RadioLabel>
        </RadioDiv2>
        <TextAreaInput
          name="comment"
          rows="5"
          placeholder="Додати коментар"
          onChange={handleChange}
          value={formData.comment}
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
