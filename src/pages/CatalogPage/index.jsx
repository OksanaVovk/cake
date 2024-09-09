import { CatalogList } from 'components/CatalogList';
import { NavCatalog } from 'components/NavCatalog';
import { FilterButtons } from 'components/FilterButtons';
import { CatalogPageBox, CatalogPageTitle } from './CatalogPage.styled';
const CatalogPage = () => {
  return (
    <CatalogPageBox>
      <NavCatalog />
      <CatalogPageTitle>Кaталог</CatalogPageTitle>
      <FilterButtons />
      <CatalogList />
    </CatalogPageBox>
  );
};

export default CatalogPage;
