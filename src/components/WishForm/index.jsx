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

  // switch (значення) {
  //   case значення:
  //     інструкції;
  //     break;

  //   case значення:
  //     інструкції;
  //     break;

  //   default:
  //     інструкції;
  // }

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
      const errorAr = err.inner.reduce((newAr, item) => {
        newAr.push({ name: item.params.path, message: item.errors });
        return newAr;
      }, []);
      console.log(errorAr);

      setError(errorAr);
      console.log(err.inner);
      console.log(err.errors);
    }
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
              placeholder="Ім'я"
              required
              onChange={handleChange}
            ></Input>
            {error.map(
              er =>
                er.name === 'username' && (
                  <div className="error">{er.message[0]}</div>
                )
            )}
            <Input
              type="tel"
              name="phone"
              placeholder="Номер телефону"
              required
              onChange={handleChange}
            ></Input>
            {error.map(
              er =>
                er.name === 'phone' && (
                  <div className="error">{er.message[0]}</div>
                )
            )}
            <Textarea
              name="text"
              rows="5"
              placeholder="Опишіть ваші побажання:"
              onChange={handleChange}
              required
            ></Textarea>
            {error.map(
              er =>
                er.name === 'text' && (
                  <div className="error">{er.message[0]}</div>
                )
            )}
            <ButtonForm type="submit" className="buttonform" text="НАДІСЛАТИ" />
          </Form>
        </WishFormBox>
      </WishFormBanner>
    </WishFormGBox>
  );
};

// [
//   {
//     value: 'Oksana_VD',
//     path: ["Будь ласка, введіть валідне ім'я"],
//     type: 'matches',
//     params: {
//       value: 'Oksana_VD',
//       originalValue: 'Oksana_VD',
//       path: 'username',
//       spec: {
//         strip: false,
//         strict: false,
//         abortEarly: true,
//         recursive: true,
//         disableStackTrace: false,
//         nullable: false,
//         optional: false,
//         coerce: true,
//       },
//       disableStackTrace: false,
//       regex: {},
//     },
//     errors: ["Будь ласка, введіть валідне ім'я"],
//     inner: [],
//     name: 'ValidationError',
//     message: "Будь ласка, введіть валідне ім'я",
//   },
//   {
//     value: '+380507113318',
//     path: ['Номер телефону недійсний'],
//     type: 'matches',
//     params: {
//       value: '+380507113318',
//       originalValue: '+380507113318',
//       path: 'phone',
//       spec: {
//         strip: false,
//         strict: false,
//         abortEarly: true,
//         recursive: true,
//         disableStackTrace: false,
//         nullable: false,
//         optional: false,
//         coerce: true,
//       },
//       disableStackTrace: false,
//       regex: {},
//     },
//     errors: ['Номер телефону недійсний'],
//     inner: [],
//     name: 'ValidationError',
//     message: 'Номер телефону недійсний',
//   },
// ];
