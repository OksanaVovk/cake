import { CatalogItem } from 'components/CatalogItem';
import { Basa } from '../../Basa.js';

export const CatalogList = () => {
  const CatalogBase = Basa;

  return (
    <ul>
      {CatalogBase.map(image => (
        <CatalogItem
          id={image.id}
          picture1x={image.picture1x}
          picture2x={image.picture2x}
          category={image.category}
          name={image.name}
          number={image.number}
          price={image.price}
          unit={image.unit}
        />
      ))}
    </ul>
  );
};
