import { useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';
import { CatalogItem } from 'components/CatalogItem';
import { CatalogListBox } from './CatalogList.styled.js';

export const CatalogList = () => {
  const filterWord = useSelector(selectors.selectFilterWord);
  const allProducts = useSelector(selectors.selectProductsBase);

  const filterProducts = allProducts.filter(
    prod => prod.category === filterWord
  );
  return (
    <CatalogListBox>
      {filterProducts.map(image => (
        <CatalogItem
          id={image.id}
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
