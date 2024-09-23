import {
  NavCatalogItemBox,
  NavCatalogListBox,
  NavCatalogText,
  LinkNav,
} from './NavCatalog.styled';
export const NavCatalog = ({ name, id }) => {
  return (
    <NavCatalogListBox>
      <NavCatalogItemBox>
        <LinkNav to="/">Головна</LinkNav>
      </NavCatalogItemBox>
      <NavCatalogItemBox>
        <NavCatalogText> / </NavCatalogText>
        <LinkNav to="/catalog">Каталог</LinkNav>
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
