import { OrderForm } from 'components/OrderForm';
import { OrderBasket } from 'components/OrderBasket';
import {
  LinkToCatalog,
  Title,
  OrderPageBox,
  OrderBasketBox,
  OrderFormBox,
} from './OrderPage.styled';
const OrderPage = () => {
  return (
    <OrderPageBox>
      <LinkToCatalog to="/catalog">Продовжити покупки</LinkToCatalog>
      <Title>Оформлення замовлення</Title>
      <OrderFormBox>
        <OrderBasketBox>
          <OrderBasket />
        </OrderBasketBox>
        <OrderForm />
      </OrderFormBox>
    </OrderPageBox>
  );
};
export default OrderPage;
