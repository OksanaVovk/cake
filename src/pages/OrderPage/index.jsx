import { OrderForm } from 'components/OrderForm';
import { LinkToCatalog, Title, OrderPageBox } from './OrderPage.styled';
const OrderPage = () => {
  return (
    <OrderPageBox>
      <LinkToCatalog to="/catalog">Продовжити покупки</LinkToCatalog>
      <Title>Оформлення замовлення</Title>
      <OrderForm />
    </OrderPageBox>
  );
};
export default OrderPage;
