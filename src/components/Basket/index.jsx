import { useDispatch, useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';
import sprite from '../../images/icons.svg';
import {
  BasketSvg,
  Text,
  BasketBox,
  CircleBox,
  TextCircle,
  Button,
} from './Basket.styled';
import { toggleBasket } from '../../redux/modalSlice';

export const Basket = () => {
  const dispatch = useDispatch();
  const basketData = useSelector(selectors.selectBasketProdukts);
  const totalPr = basketData.reduce((total, prod) => {
    return total + prod.sum;
  }, 0);

  const onBtnClick = () => {
    try {
      dispatch(toggleBasket(true));
    } catch {
      console.log(Error);
    }
  };
  return (
    <BasketBox>
      <Button onClick={onBtnClick}>
        {basketData.length ? (
          <CircleBox>
            <TextCircle>{basketData.length}</TextCircle>
          </CircleBox>
        ) : null}
        <BasketSvg>
          <use href={sprite + '#icon-Shopping-cart'}></use>
        </BasketSvg>
      </Button>
      {totalPr ? (
        <div>
          <Text> {totalPr} грн</Text>
        </div>
      ) : null}
    </BasketBox>
  );
};
