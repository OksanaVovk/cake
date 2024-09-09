import { Link } from 'react-router-dom';
import {
  NavCatalogItemBox,
  NavCatalogListBox,
  NavCatalogText,
} from './NavCatalog.styled';
export const NavCatalog = ({ name, id }) => {
  return (
    <NavCatalogListBox>
      <NavCatalogItemBox>
        <Link to="/">Головна</Link>
      </NavCatalogItemBox>
      <NavCatalogItemBox>
        <NavCatalogText> / </NavCatalogText>
        <Link to="/catalog">Каталог</Link>
      </NavCatalogItemBox>
      {name ? (
        <NavCatalogItemBox>
          <NavCatalogText>/</NavCatalogText>
          <Link to={`/catalog/${id}`}>{name}</Link>
        </NavCatalogItemBox>
      ) : (
        ''
      )}
    </NavCatalogListBox>
  );
};
