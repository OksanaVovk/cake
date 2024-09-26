import { useState } from 'react';
import { sentEmail } from 'components/utils/sendForm';
import wishSchema from 'components/utils/schemas';

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
} from './WishForm.styled';

export const WishForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    text: '',
  });
  const [error, setError] = useState([]);
  // const [error, setError] = useState({
  //   username: '',
  //   phone: '',
  //   text: '',
  // });

  const handleChange = event => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(formData);
    try {
      let validForm = await wishSchema.isValid(formData);
      if (validForm) {
        sentEmail(event);
        // submit the form
      } else {
        await wishSchema.validate(formData, {
          abortEarly: false,
        });
      }
    } catch (err) {
      setError(err.errors);
      console.log(err);
      console.log(err.errors);
    }
    // const errors = await wishSchema.validate(formData);

    // if (errors) {
    //   console.log(errors);
    //   setError({
    //     ...error,
    //     [name]: error,
    //   });
    //   // Handle validation errors
    // } else {
    //   sentEmail(event);
    //   // Submit the form data to your backend
    // }
  };

  // async function onSubmitForm(e) {
  //   e.preventDefault();
  //   let form = e.target;
  //   let formData = new FormData(form);
  //   let formObj = Object.fromEntries(formData.entries());
  //   console.log(formObj);
  //   try {
  //     let validForm = await wishSchema.isValid(formObj);
  //     if (validForm) {
  //       sentEmail(e);
  //       // submit the form
  //     } else {
  //       await wishSchema.validate(formObj, { abortEarly: false });
  //     }
  //   } catch (err) {
  //     setError(err.errors);
  //     console.log(err);
  //     console.log(err.errors);
  //   }
  // }
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
              placeholder="Ім'я"
              required
              onChange={handleChange}
            ></Input>
            {error?.[0] && <div className="error">{error?.[0]}</div>}
            {/* n className="error">{errors.username}</span> */}
            <Input
              type="tel"
              name="phone"
              placeholder="Номер телефону"
              required
              onChange={handleChange}
            ></Input>
            {error?.[1] && <div className="error">{error?.[1]}</div>}
            {/* <span className="error">{errors.phone}</span> */}
            <Textarea
              name="text"
              rows="5"
              placeholder="Опишіть ваші побажання:"
              onChange={handleChange}
              required
            ></Textarea>
            {error?.[2] && <div className="error">{error?.[2]}</div>}
            {/* <span className="error">{errors.text}</span> */}
            <ButtonForm type="submit" className="buttonform" text="НАДІСЛАТИ" />
          </Form>
        </WishFormBox>
      </WishFormBanner>
    </WishFormGBox>
  );
};
