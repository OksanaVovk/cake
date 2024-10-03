import { useState } from 'react';
// import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
// import { selectors } from '../../redux/selectors';
import { addProduct } from '../../redux/basketSlice';
// import { toggleBasketDate } from '../../redux/productsSlice';
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
  Prise,
  SumDiv,
  Sum,
  Input,
} from './ProductCard.styled';

export const ProductCard = ({
  name,
  price,
  piece,
  unit,
  weight,
  number,
  picture1x,
  picture2x,
  category,
  id,
}) => {
  // const basketProd = useSelector(selectors.selectBasketProdukts);
  // const getInitialState = useCallback(() => {
  //   const prod = basketProd.find(pr => pr.id === id);
  //   if (prod === undefined) {
  //     return '1';
  //   } else if (prod.unit !== 'шт') {
  //     return '1';
  //   } else {
  //     return prod.piece;
  //   }
  //   // do something!
  // }, [id, basketProd]);

  const [weightProduct, setWeightProdact] = useState('1');
  const [pieceProduct, setPieceProduct] = useState('1');

  // useEffect(() => {
  //   setPieceProduct(getInitialState());
  //   setWeightProdact(getInitialState());
  // }, [getInitialState]);

  const dispatch = useDispatch();
  const reset = () => {
    setWeightProdact('1');
    setPieceProduct('1');
  };

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
        // dispatch(toggleBasketDate({ id: id, basketNumber: weightProduct }));
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
        // dispatch(toggleBasketDate({ id: id, basketNumber: pieceProduct }));
      }
      Notify.success('Товар додано до корзини');
    } catch {
      console.log(Error);
      Notify.warning('Виникла помилка при додаванні товару в корзину');
    }
    reset();
  };

  return (
    <GeneralDiv>
      <ProductCardDiv>
        <Title>{name}</Title>
        <Img src={picture1x} alt={category} srcSet={`${picture2x} 2x`} />
        <Form onSubmit={handelSubmit}>
          <PriceDiv>
            <LabelDiv2 className="price" htmlFor="price">
              {unit === 'кг' ? `Ціна за кілограм` : `Ціна за ${number} шт`}
            </LabelDiv2>
            <PriceLittleDiv>
              <Prise id="price" disabled name="pieces" value={price} />
              <p>грн</p>
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
