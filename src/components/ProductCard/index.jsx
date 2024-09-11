import { Img, Title, Form, ButtonOrder } from './ProductCard.styled';

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
    <>
      <Title>{name}</Title>
      <Img src={picture1x} alt={category} srcSet={`${picture2x} 2x`} />
      <Form>
        {unit === 'кг' ? (
          <select name="weight">
            <option disabled selected="selected">
              Вага готового виробу
            </option>
            <option value="0.5">0.5 кг</option>
            <option value="1">1 кг</option>
            <option value="1.5">1,5 кг</option>
            <option value="2">2 кг</option>
            <option value="2.5">2.5кг</option>
            <option value="3">3 кг</option>
          </select>
        ) : (
          <label>
            Кількіть
            <input
              type="number"
              name="pieces"
              min="1"
              max="100"
              step="1"
              placeholder="1"
            />
          </label>
        )}

        <label htmlFor="price">
          {unit === 'кг' ? `Ціна за кілограм` : `Ціна`}
        </label>
        <div>
          <input id="price" disabled name="pieces" value={price} />
          <p>грн</p>
        </div>
        <label>
          <input type="number" disabled value="1111"></input>
          <p>грн</p>
        </label>
        <ButtonOrder className="order" text="ЗАМОВИТИ" />
      </Form>
    </>
  );
};
