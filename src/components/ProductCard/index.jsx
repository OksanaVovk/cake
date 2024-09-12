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
  Piece,
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
              <Select name="weight" defaultValue="1">
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
              <Piece
                id="piece"
                type="number"
                name="pieces"
                min="1"
                max="100"
                step="1"
                placeholder="1"
              />
            </PieceDiv>
          )}

          <SumDiv>
            <Sum type="number" disabled value="1111"></Sum>
            <p>грн</p>
          </SumDiv>
          <ButtonOrder className="order" text="ЗАМОВИТИ" />
        </Form>
      </ProductCardDiv>
    </GeneralDiv>
  );
};
