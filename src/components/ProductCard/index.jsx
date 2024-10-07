import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';
import { addProduct } from '../../redux/basketSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  GeneralDiv,
  ProductCardDiv,
  Img,
  Title,
  Form,
  ButtonOrder,
  SelectDiv,
  Select,
  PieceDiv,
  PieceInputDiv,
  LabelDiv2,
  PriceDiv,
  PriceLittleDiv,
  Priсe,
  SumDiv,
  Sum,
  Input,
  InfText,
} from './ProductCard.styled';

export const ProductCard = ({
  name,
  price,
  unit,
  number,
  picture1x,
  picture2x,
  category,
  id,
}) => {
  const [weightProduct, setWeightProdact] = useState('1');
  const [orderCake, setOrderCake] = useState(false);
  const [pieceProduct, setPieceProduct] = useState('1');

  const basketProd = useSelector(selectors.selectBasketProdukts);

  useEffect(() => {
    const prod = basketProd.find(pr => pr.id === id);

    if (prod === undefined) {
      setWeightProdact('1');
      setPieceProduct('1');
      setOrderCake(false);
    } else if (prod.unit !== 'шт') {
      setWeightProdact('1');
      setOrderCake(true);
    } else {
      setPieceProduct(prod.amount);
      setOrderCake(false);
    }
  }, [basketProd, id]);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'weight':
        setWeightProdact(value);
        break;
      case 'pieces':
        setPieceProduct(value);
        break;
      default:
        return;
    }
  };
  const handelSubmit = event => {
    event.preventDefault();
    if (Number(pieceProduct) * price === 0) {
      Notify.warning('Кількість товару не може бути менше 1');
    } else {
      try {
        if (unit === 'кг') {
          dispatch(
            addProduct({
              name: name,
              amount: Number(weightProduct),
              sum: Number(weightProduct) * price,
              id: id,
              src: picture1x,
              srcSet: picture2x,
              price: price,
              unit: unit,
            })
          );
        } else {
          dispatch(
            addProduct({
              name: name,
              amount: Number(pieceProduct),
              sum: Number(pieceProduct) * price,
              id: id,
              src: picture1x,
              srcSet: picture2x,
              price: price,
              unit: unit,
              number: number,
            })
          );
        }
        Notify.success('Товар додано до корзини');
      } catch {
        console.log(Error);
        Notify.warning('Виникла помилка при додаванні товару в корзину');
      }
    }
  };

  return (
    <GeneralDiv>
      <ProductCardDiv>
        <Title>{name}</Title>
        {orderCake && (
          <InfText>
            Ви уже замовили цей торт, якщо бажаєте, можете замовити ще
          </InfText>
        )}
        <Img src={picture1x} alt={category} srcSet={`${picture2x} 2x`} />
        <Form onSubmit={handelSubmit}>
          <PriceDiv>
            <LabelDiv2 className="price" htmlFor="price">
              {unit === 'кг' ? `Ціна за кілограм` : `Ціна за ${number} шт`}
            </LabelDiv2>
            <PriceLittleDiv>
              <Priсe>{price} грн </Priсe>
            </PriceLittleDiv>
          </PriceDiv>

          {unit === 'кг' ? (
            <SelectDiv>
              Вага готового виробу
              <Select
                name="weight"
                value={weightProduct}
                onChange={handleInputChange}
              >
                <option value="0.5">0.5 кг</option>
                <option value="1">1 кг</option>
                <option value="1.5">1,5 кг</option>
                <option value="2">2 кг</option>
                <option value="2.5">2.5 кг</option>
                <option value="3">3 кг</option>
              </Select>
            </SelectDiv>
          ) : (
            <PieceDiv>
              <PieceInputDiv htmlFor="piece">Кількіть </PieceInputDiv>
              <Input
                id="piece"
                type="number"
                name="pieces"
                min="1"
                max="100"
                step="1"
                placeholder="1"
                value={pieceProduct}
                onChange={handleInputChange}
              />
            </PieceDiv>
          )}

          <SumDiv>
            <Sum>
              {unit === 'кг'
                ? price * Number(weightProduct)
                : price * Number(pieceProduct)}{' '}
              грн
            </Sum>
          </SumDiv>
          <ButtonOrder type="submit" className="order" text="ЗАМОВИТИ" />
        </Form>
      </ProductCardDiv>
    </GeneralDiv>
  );
};
