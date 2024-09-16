import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/basketSlice';
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
  unit,
  weight,
  number,
  picture1x,
  picture2x,
  category,
  id,
}) => {
  const [weightProduct, setWeightProdact] = useState('1');
  const [pieceProduct, setPieceProduct] = useState('1');

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
    console.log('klick');

    const choice = {
      name: name,
      weight: weightProduct,
      id: id,
      src: picture1x,
      srcSet: picture2x,
      price: price,
      unit: unit,
    };
    console.log(choice);
    if (unit === 'кг') {
      dispatch(
        addProduct({
          name: name,
          weight: weightProduct,
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
          piece: pieceProduct,
          id: id,
          src: picture1x,
          srcSet: picture2x,
          price: price,
          unit: unit,
          number: number,
        })
      );
    }
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
            <Sum
              type="number"
              disabled
              value={
                unit === 'кг'
                  ? price * Number(weightProduct)
                  : price * Number(pieceProduct)
              }
            ></Sum>
            <p>грн</p>
          </SumDiv>
          <ButtonOrder type="submit" className="order" text="ЗАМОВИТИ" />
        </Form>
      </ProductCardDiv>
    </GeneralDiv>
  );
};
