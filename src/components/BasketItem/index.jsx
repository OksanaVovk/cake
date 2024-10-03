import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/basketSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  TextBoxLarge,
  ItemBox,
  BoxImg,
  Img,
  ItemsName,
  ItemsText,
  TextBox,
  TextBoxLast,
  DeleteButton,
  DeleteSvg,
} from './BasketItem.styled';
import sprite from '../../images/icons.svg';

export const BasketItem = ({
  picture1x,
  picture2x,
  name,
  number,
  price,
  sum,
  amount,
  unit,
  id,
}) => {
  const dispatch = useDispatch();

  const onBtnClick = id => {
    try {
      console.log(id);
      dispatch(deleteProduct(id));
      Notify.success('Товар видалено з корзини');
    } catch {
      console.log(Error);
      Notify.warning('Помилка видалення');
    }
  };

  return (
    <ItemBox>
      <BoxImg>
        <Img src={picture1x} alt={name} srcSet={`${picture2x} 2x`} />
      </BoxImg>
      <TextBoxLarge>
        <ItemsName>{name}</ItemsName>
        <TextBox>
          <ItemsText>{unit === 'кг' ? 'Вага:' : `Кількість:`}</ItemsText>
          <ItemsText>{unit === 'кг' ? amount + ` кг` : amount}</ItemsText>
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
      <DeleteButton type="button" onClick={() => onBtnClick(id)}>
        <DeleteSvg>
          <use href={sprite + '#icon-delete'}></use>
        </DeleteSvg>
      </DeleteButton>
    </ItemBox>
  );
};
