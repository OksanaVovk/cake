import { NavStyled, Link } from './Navigation2.styled';

export const Navigation2 = () => {
  return (
    <NavStyled>
      <Link smooth to="/#delivery">
        Доставка
      </Link>
      <Link smooth to="/#contacts">
        Контакти
      </Link>
    </NavStyled>
  );
};
