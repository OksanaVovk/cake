import sprite from '../../images/icons.svg';
import {
  DeliveryBox,
  Title,
  BoxSvg,
  DeliverySvg1,
  DeliverySvg3,
  DeliverySvg2,
  TextTitle,
  Text,
  DeliveryBoxSvg,
  Line1,
  Line2,
  LinePositionBox,
} from './Delivery.styled';
export const Delivery = () => {
  return (
    <DeliveryBox>
      <Title>Доставка і оплата</Title>
      <LinePositionBox>
        <DeliveryBoxSvg>
          <BoxSvg>
            <DeliverySvg1>
              <use href={sprite + '#icon-box'}></use>
            </DeliverySvg1>
            <TextTitle>Самовивіз</TextTitle>
            <Text>Самовивіз з Печерського р-ну, м. Київ</Text>
          </BoxSvg>
          <BoxSvg>
            <DeliverySvg2>
              <use href={sprite + '#icon-delivery'}></use>
            </DeliverySvg2>
            <TextTitle>Доставка</TextTitle>
            <Text>Доставка на таксі (за тарифами служби таксі)</Text>
          </BoxSvg>
          <BoxSvg>
            <DeliverySvg3>
              <use href={sprite + '#icon-cash'}></use>
            </DeliverySvg3>
            <TextTitle>Передплата</TextTitle>
            <Text>Передплата на картку в розмірі 50% від суми замовлення</Text>
          </BoxSvg>
        </DeliveryBoxSvg>
        <Line1></Line1>
        <Line2></Line2>
      </LinePositionBox>
    </DeliveryBox>
  );
};
