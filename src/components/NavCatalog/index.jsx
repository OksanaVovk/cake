import { useDispatch } from 'react-redux';
import { filterProd } from '../../redux/productsSlice';
import {
  NavCatalogItemBox,
  NavCatalogListBox,
  NavCatalogText,
  LinkNav,
} from './NavCatalog.styled';
export const NavCatalog = ({ name, id }) => {
  const dispatch = useDispatch();
  const onLinkClick = () => {
    dispatch(filterProd('Торти'));
  };
  return (
    <NavCatalogListBox>
      <NavCatalogItemBox>
        <LinkNav to="/">Головна</LinkNav>
      </NavCatalogItemBox>
      <NavCatalogItemBox>
        <NavCatalogText> / </NavCatalogText>
        <LinkNav to="/catalog" onClick={onLinkClick()}>
          Каталог
        </LinkNav>
      </NavCatalogItemBox>
      {name ? (
        <NavCatalogItemBox>
          <NavCatalogText>/</NavCatalogText>
          <NavCatalogText>{name}</NavCatalogText>
        </NavCatalogItemBox>
      ) : (
        ''
      )}
    </NavCatalogListBox>
  );
};
