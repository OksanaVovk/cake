export const BasketItem = ({
  picture1x,
  picture2x,
  name,
  number,
  price,
  sum,
  piece,
  weight,
  unit,
  id,
}) => {
  return (
    <li>
      <img src={picture1x} alt={name} srcSet={`${picture2x} 2x`} />
      <div>
        <h2>{name}</h2>
        <div>
          <p>{unit === 'кг' ? 'Вага:' : `Кількість:`}</p>
          <p>{unit === 'кг' ? weight : piece}</p>
        </div>
        <div>
          <p>{unit === 'кг' ? `Ціна за кілограм:` : `Ціна за ${number} шт:`}</p>
          <p>{price}</p>
        </div>
        <div>
          <p>Сума:</p>
          <p>{sum}</p>
        </div>
      </div>
    </li>
  );
};
