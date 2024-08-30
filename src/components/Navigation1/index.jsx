import { NavStyled, Link } from './Navigation1.Styled';

export const Navigation1 = () => {
  return (
    <NavStyled>
      <Link to="/catalog">КАТАЛОГ</Link>
      <Link to="#aboutme">ПРО МЕНЕ</Link>
    </NavStyled>
  );
};
