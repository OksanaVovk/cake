import { useDispatch } from 'react-redux';
import sprite from '../../images/icons.svg';
import { BasketSvg } from './Basket.styled';
import { toggleBasket } from '../../redux/modalSlice';

export const Basket = () => {
  const dispatch = useDispatch();
  const onBtnClick = () => {
    try {
      dispatch(toggleBasket(true));
    } catch {
      console.log(Error);
    }
  };
  return (
    <nav>
      <button onClick={onBtnClick}>
        <BasketSvg>
          <use href={sprite + '#icon-Shopping-cart'}></use>
        </BasketSvg>
      </button>
    </nav>
  );
};
