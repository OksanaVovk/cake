import { useState } from 'react';
import { sentEmail } from 'components/utils/sendForm';
import { wishSchema } from 'components/utils/schemas';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  WishFormBox,
  WishFormBanner,
  Form,
  Input,
  Textarea,
  ButtonForm,
  Title,
  Text,
  BoxText,
  WishFormGBox,
  ErrorText,
} from './WishForm.styled';
const formDataInitialState = { username: '', phone: '', text: '' };

export const WishForm = () => {
  const [formData, setFormData] = useState(formDataInitialState);
  const [error, setError] = useState([]);

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
    console.log(formData);
    try {
      let validForm = await wishSchema.isValid(formData);
      if (validForm) {
        try {
          sentEmail(event);
          setError([]);
          Notify.success('Ваша заявка успішно надіслана');
          // submit the form
        } catch (err) {
          Notify.warning('Виникла помилка, спробуйте написати листа пізніше');
        }
      } else {
        await wishSchema.validate(formData, {
          abortEarly: false,
        });
      }
    } catch (err) {
      const errorAr = err.inner.reduce((newAr, item) => {
        newAr.push({ name: item.params.path, message: item.errors });
        return newAr;
      }, []);
      setError(errorAr);
      // console.log(errorAr);
      // console.log(err.inner);
      // console.log(err.errors);
    }
    reset();
  };
  return (
    <WishFormGBox>
      <WishFormBanner>
        <WishFormBox>
          <BoxText>
            <Title>Давайте зробимо щось унікальне разом!</Title>
            <Text>
              Ви можете замовити свій власний рецепт десерту, який вам буде до
              вподоби. Заповніть заявку та я зв’яжусь з вами, аби обговорити
              деталі замовлення.
            </Text>
          </BoxText>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="username"
              placeholder="Ім'я*"
              value={formData.username}
              required
              onChange={handleChange}
            ></Input>
            {error.map(
              er =>
                er.name === 'username' && (
                  <ErrorText className="error">{er.message[0]}</ErrorText>
                )
            )}
            <Input
              type="tel"
              name="phone"
              placeholder="Номер телефону*"
              required
              onChange={handleChange}
              value={formData.phone}
            ></Input>
            {error.map(
              er =>
                er.name === 'phone' && (
                  <ErrorText className="error">{er.message[0]}</ErrorText>
                )
            )}
            <Textarea
              name="text"
              rows="5"
              placeholder="Опишіть ваші побажання:*"
              onChange={handleChange}
              value={formData.text}
              required
            ></Textarea>
            {error.map(
              er =>
                er.name === 'text' && (
                  <ErrorText className="error">{er.message[0]}</ErrorText>
                )
            )}
            <ButtonForm type="submit" className="buttonform" text="НАДІСЛАТИ" />
          </Form>
        </WishFormBox>
      </WishFormBanner>
    </WishFormGBox>
  );
};
