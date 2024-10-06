import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { sentEmail } from 'components/utils/sendForm';
import { toggleOrder } from '../../redux/modalSlice';
import { selectors } from '../../redux/selectors';
import { clearBasketState } from '../../redux/basketSlice';
import { useNavigate } from 'react-router-dom';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import {
//   orderSchemaDesct,
//   orderSchemaMob,
// } from '../../components/utils/schemas';
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
  // InputDate,
  // InputDescDate,
  InputDatePicker,
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
  // const [startDate, setStartDate] = useState();
  const [startDatePicker, setStartDatePiker] = useState(new Date());

  const [error, setError] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const basketData = useSelector(selectors.selectBasketProdukts);

  const totalPr = basketData.reduce((total, prod) => {
    return total + prod.sum;
  }, 0);
  totalPr === 0 && navigate('/catalog', { replace: true });
  // const mds = window.matchMedia('(min-width: 1439px)');
  // const mds2 = window.matchMedia('(max-width: 1440px)');

  const handleChange = event => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (value, name) => {
    setStartDatePiker(value);
    console.log(name);
  };

  const reset = () => {
    setFormData(formDataInitialState);
    // setStartDatePiker(new Date());
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(formData);
    try {
      let validForm = await orderSchema.isValid(formData);
      // let validForm = mds.matches
      //   ? await orderSchemaDesct.isValid(formData)
      //   : await orderSchemaMob.isValid(formData);
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
        // mds.matches
        //   ? await orderSchemaDesct.validate(formData, {
        //       abortEarly: false,
        //     })
        //   : await orderSchemaDesct.validate(formData, {
        //       abortEarly: false,
        //     });
      }
    } catch (err) {
      console.log(err);
      const errorAr = err.inner.reduce((newAr, item) => {
        newAr.push({ name: item.params.path, message: item.errors });
        return newAr;
      }, []);
      setError(errorAr);
    }
    reset();
  };

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

          {/* {mds.matches && (
            <>
              <InputDescDate
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
            </>
          )} */}
          {/* {mds2.matches && (
            <>
              <InputDate
                className="dateInput"
                type="text"
                name="datePhone"
                format="dd-MM-yyyy"
                value={startDate}
                onChange={(value, event) => {
                  setStartDate(value);
                }}
              />
            </>
          )} */}
          <InputDatePicker
            className="datePiker"
            name="date"
            format="dd-MM-yyyy"
            value={startDatePicker}
            onChange={handleDateChange}
          />
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
