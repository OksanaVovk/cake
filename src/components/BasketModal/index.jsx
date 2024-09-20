import { useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';
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
} from './BasketModal.styled';
import sprite from '../../images/icons.svg';
import { BasketItem } from '../BasketItem';

export const BasketModal = () => {
  const basketData = useSelector(selectors.selectBasketProdukts);
  console.log(basketData);
  const totalPr = basketData.reduce((total, prod) => {
    return total + prod.sum;
  }, 0);
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
        <TotalPrDiv>
          <TextDiv>
            <Text>Ваше замовлення:</Text>
          </TextDiv>
          <TextBoldDiv>
            <TextBold>Загальна сума:</TextBold>
            <TextBold>{totalPr} грн</TextBold>
          </TextBoldDiv>
          <ButtonOrder className="btmodal" text="ОФОРМИТИ" />
        </TotalPrDiv>
      </ProductDiv>
    </ModalWindow>
  );
};
