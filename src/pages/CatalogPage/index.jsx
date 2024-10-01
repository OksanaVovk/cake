import { useEffect, useState } from 'react';
import { CatalogList } from 'components/CatalogList';
import { NavCatalog } from 'components/NavCatalog';
import { FilterButtons } from 'components/FilterButtons';
import { CatalogPageBox, CatalogPageTitle } from './CatalogPage.styled';
import Loader from 'components/Loader/Loader';
const CatalogPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <CatalogPageBox>
        <NavCatalog />
        <CatalogPageTitle>Кaталог</CatalogPageTitle>
        <FilterButtons />
        <CatalogList />
      </CatalogPageBox>
    </>
  );
};

export default CatalogPage;
