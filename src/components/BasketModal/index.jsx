import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../../redux/selectors';
import { toggleBasket } from '../../redux/modalSlice';
import sprite from '../../images/icons.svg';
import { useNavigate } from 'react-router-dom';
import { BasketItem } from '../BasketItem';
import {
  ModalWindow,
  ModalButton,
  ModalSvg,
  ModalTitle,
  ProductDiv,
  TitleDiv,
  Text,
  TextBold,
  ButtonOrder,
  TotalPrDiv,
  TextDiv,
  TextBoldDiv,
  TextBoldEmpty,
  ButtonDark,
  EmptyBox,
} from './BasketModal.styled';

export const BasketModal = () => {
  const basketData = useSelector(selectors.selectBasketProdukts);
  console.log(basketData);
  const totalPr = basketData.reduce((total, prod) => {
    return total + prod.sum;
  }, 0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onBtnClick = () => {
    try {
      dispatch(toggleBasket(false));
    } catch {
      console.log(Error);
    }
  };

  const onBtnOrderClick = () => {
    try {
      dispatch(toggleBasket(false));
      navigate('/order', { replace: true });
    } catch {
      console.log(Error);
    }
  };

  const onBtnDarkClick = () => {
    try {
      dispatch(toggleBasket(false));
      navigate('/catalog', { replace: true });
    } catch {
      console.log(Error);
    }
  };

  return (
    <ModalWindow>
      <TitleDiv>
        <ModalTitle>Ваше замовлення:</ModalTitle>
        <ModalButton onClick={onBtnClick}>
          <ModalSvg>
            <use href={sprite + '#icon-close'}></use>
          </ModalSvg>
        </ModalButton>
      </TitleDiv>
      {basketData.length === 0 ? (
        <EmptyBox>
          <TextBoldEmpty>Ваш кошик порожній</TextBoldEmpty>
          <ButtonDark className="dark" onClick={onBtnDarkClick}>
            Почати покупки
          </ButtonDark>
        </EmptyBox>
      ) : (
        <ProductDiv>
          <ul>
            {basketData.map((prod, index) => (
              <BasketItem
                id={prod.id}
                key={index}
                picture1x={prod.src}
                picture2x={prod.srcSet}
                name={prod.name}
                number={prod.number}
                piece={prod.piece}
                price={prod.price}
                weight={prod.weight}
                unit={prod.unit}
                sum={prod.sum}
              />
            ))}
          </ul>

          <TotalPrDiv>
            <TextDiv>
              <Text>Ваше замовлення:</Text>
            </TextDiv>
            <TextBoldDiv>
              <TextBold>Загальна сума:</TextBold>
              <TextBold>{totalPr} грн</TextBold>
            </TextBoldDiv>
            <ButtonOrder type="button" onClick={onBtnOrderClick}>
              ОФОРМИТИ
            </ButtonOrder>
          </TotalPrDiv>
        </ProductDiv>
      )}
    </ModalWindow>
  );
};
