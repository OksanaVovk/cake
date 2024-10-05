import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { selectors } from '../../redux/selectors';
import sprite from '../../images/icons.svg';
import { Link } from 'react-router-dom';
import {
  BasketSvg,
  ItemsName,
  ItemsText,
  BoxText,
  BoxGText,
  BoxImg,
  Img,
  BoxItem,
  BasketText,
  BasketDiv,
} from './CatalogItem.styled';

export const CatalogItem = ({
  picture1x,
  category,
  picture2x,
  name,
  number,
  price,
  unit,
  id,
}) => {
  const [amountInBasket, setAmountInBasket] = useState('');

  const basketProd = useSelector(selectors.selectBasketProdukts);
  const inBasketProd = basketProd.find(pr => pr.id === id);
  useEffect(() => {
    if (inBasketProd !== undefined) {
      if (inBasketProd.unit === 'шт') {
        setAmountInBasket(inBasketProd.amount);
      } else {
        const inBasketProdArray = basketProd.filter(pr => pr.id === id);
        setAmountInBasket(inBasketProdArray.length);
      }
    }
  }, [inBasketProd, basketProd, id]);

  return (
    <BoxItem>
      <BoxImg>
        <Link to={`/catalog/${id}`}>
          <Img src={picture1x} alt={category} srcSet={`${picture2x} 2x`} />
        </Link>
      </BoxImg>

      <BoxGText>
        <BoxText>
          <ItemsName>{name}</ItemsName>
          <ItemsText>
            {number > 1
              ? `${price} грн/${number}${unit}`
              : `${price} грн/${unit}`}
          </ItemsText>
        </BoxText>

        <BasketDiv>
          {inBasketProd !== undefined ? (
            <BasketText> {amountInBasket}</BasketText>
          ) : null}
          <BasketSvg>
            <use href={sprite + '#icon-Shopping-cart'}></use>
          </BasketSvg>
        </BasketDiv>
      </BoxGText>
    </BoxItem>
  );
};
