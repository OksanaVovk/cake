import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectors } from '../../redux/selectors';
import { CatalogItem } from 'components/CatalogItem';
import { CatalogListBox } from './CatalogList.styled.js';
import Loader from 'components/Loader/Loader';

export const CatalogList = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  const filterWord = useSelector(selectors.selectFilterWord);
  const allProducts = useSelector(selectors.selectProductsBase);

  const filterProducts = allProducts.filter(
    prod => prod.category === filterWord
  );
  return (
    <>
      {isLoading && <Loader />}
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
    </>
  );
};
