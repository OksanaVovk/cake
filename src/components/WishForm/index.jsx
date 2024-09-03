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
} from './WishForm.styled';

export const WishForm = () => {
  return (
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
        <Form>
          <Input
            type="text"
            name="username"
            placeholder="Ім'я"
            required
          ></Input>
          <Input
            type="tel"
            name="phone"
            placeholder="Номер телефону"
            required
          ></Input>
          <Textarea
            name="text"
            rows="5"
            placeholder="Опишіть ваші побажання:"
            required
          ></Textarea>
          <ButtonForm className="buttonform" text="НАДІСЛАТИ" />
        </Form>
      </WishFormBox>
    </WishFormBanner>
  );
};
