import { useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';
import {
  ModalWindow,
  ModalButton,
  ModalSvg,
  ModalTitle,
  ProductDiv,
  TitleDiv,
} from './BasketModal.styled';
import sprite from '../../images/icons.svg';
import { BasketItem } from '../BasketItem';

export const BasketModal = () => {
  const basketData = useSelector(selectors.selectBasketProdukts);
  console.log(basketData);
  return (
    <ModalWindow>
      <TitleDiv>
        <ModalTitle>Ваше замовлення:</ModalTitle>
        <ModalButton>
          <ModalSvg>
            <use href={sprite + '#icon-close'}></use>
          </ModalSvg>
        </ModalButton>
      </TitleDiv>
      <ProductDiv>
        <ul>
          {basketData.map(prod => (
            <BasketItem
              id={prod.id}
              key={prod}
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
        <p>Тут баскет модал</p>
      </ProductDiv>
    </ModalWindow>
  );
};
