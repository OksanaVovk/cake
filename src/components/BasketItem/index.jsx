import {
  TextBoxLarge,
  ItemBox,
  BoxImg,
  Img,
  ItemsName,
  ItemsText,
  TextBox,
  TextBoxLast,
} from './BasketItem.styled';

export const BasketItem = ({
  picture1x,
  picture2x,
  name,
  number,
  price,
  sum,
  piece,
  weight,
  unit,
  id,
}) => {
  return (
    <ItemBox>
      <BoxImg>
        <Img src={picture1x} alt={name} srcSet={`${picture2x} 2x`} />
      </BoxImg>
      <TextBoxLarge>
        <ItemsName>{name}</ItemsName>
        <TextBox>
          <ItemsText>{unit === 'кг' ? 'Вага:' : `Кількість:`}</ItemsText>
          <ItemsText>{unit === 'кг' ? weight + ` кг` : piece}</ItemsText>
        </TextBox>
        <TextBox>
          <ItemsText>
            {unit === 'кг' ? `Ціна за кг:` : `Ціна за ${number} шт:`}
          </ItemsText>
          <ItemsText>{price} грн</ItemsText>
        </TextBox>
        <TextBoxLast className="last">
          <ItemsText>Сума:</ItemsText>
          <ItemsText>{sum} грн</ItemsText>
        </TextBoxLast>
      </TextBoxLarge>
    </ItemBox>
  );
};
