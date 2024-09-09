import { CatalogItem } from 'components/CatalogItem';
import { Basa } from '../../Basa.js';
import { CatalogListBox } from './CatalogList.styled.js';

export const CatalogList = () => {
  const CatalogBase = Basa;

  return (
    <CatalogListBox>
      {CatalogBase.map(image => (
        <CatalogItem
          key={image.id}
          picture1x={image.picture1x}
          picture2x={image.picture2x}
          category={image.category}
          name={image.name}
          number={image.number}
          price={image.price}
          unit={image.unit}
        />
      ))}
    </CatalogListBox>
  );
};
