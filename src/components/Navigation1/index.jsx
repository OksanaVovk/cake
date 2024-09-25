import { NavStyled, Link } from './Navigation1.styled';

export const Navigation1 = () => {
  return (
    <NavStyled>
      <Link to="/catalog">КАТАЛОГ</Link>
      <Link smooth to="/#aboutme">
        ПРО МЕНЕ
      </Link>
    </NavStyled>
  );
};
