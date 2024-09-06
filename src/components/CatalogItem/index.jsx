export const CatalogItem = ({
  id,
  picture1x,
  category,
  picture2x,
  name,
  number,
  price,
  unit,
}) => {
  return (
    <li key={id}>
      <img src={picture1x} alt={category} srcSet={`${picture2x} 2x`} />
      <h2>{name}</h2>
      <p>
        {number > 1 ? `${price}грн/${number}${unit}` : `${price}грн/${unit}`}
      </p>
    </li>
  );
};
