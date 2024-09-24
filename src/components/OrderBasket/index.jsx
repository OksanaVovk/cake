import { useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';
import { OrderBasketItem } from 'components/OrderBasketItem';
import { TextTitle, OrderBasketBox } from './OrderBasket.styled';

export const OrderBasket = () => {
  const basketData = useSelector(selectors.selectBasketProdukts);

  return (
    <OrderBasketBox>
      <TextTitle>Ваше замовлення:</TextTitle>
      <ul>
        {basketData.map((prod, index) => (
          <OrderBasketItem
            id={prod.id}
            key={index}
            name={prod.name}
            sum={prod.sum}
          />
        ))}
      </ul>
    </OrderBasketBox>
  );
};
