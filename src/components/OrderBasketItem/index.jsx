import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/basketSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import sprite from '../../images/icons.svg';
import {
  DeleteButton,
  DeleteSvg,
  ItemBox,
  Text,
} from './OrderBasketItem.styled';
export const OrderBasketItem = ({ name, sum, id }) => {
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
      <Text>{name}</Text>
      <Text>{sum} грн</Text>
      <DeleteButton type="button" onClick={() => onBtnClick(id)}>
        <DeleteSvg>
          <use href={sprite + '#icon-delete'}></use>
        </DeleteSvg>
      </DeleteButton>
    </ItemBox>
  );
};
