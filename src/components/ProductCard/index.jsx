import { useState } from 'react';
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
}) => {
  const [weightProduct, setWeightProdact] = useState('1');
  const [pieceProduct, setPieceProduct] = useState('1');
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

  return (
    <GeneralDiv>
      <ProductCardDiv>
        <Title>{name}</Title>
        <Img src={picture1x} alt={category} srcSet={`${picture2x} 2x`} />
        <Form>
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
          <ButtonOrder className="order" text="ЗАМОВИТИ" />
        </Form>
      </ProductCardDiv>
    </GeneralDiv>
  );
};
