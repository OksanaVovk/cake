import { NavStyled, Link } from './Navigation2.styled';

export const Navigation2 = () => {
  return (
    <NavStyled>
      <Link to="/order">Доставка</Link>
      <Link to="/#contscts">Контакти</Link>
    </NavStyled>
  );
};
