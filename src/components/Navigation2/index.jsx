import { NavStyled, Link } from './Navigation2.styled';

export const Navigation2 = () => {
  return (
    <NavStyled>
      <Link to="#delivery">Доставка</Link>
      <Link to="#contscts">Контакти</Link>
      {/* <Link to="/basket">Корзина</Link> */}

      {/* <ul>
        <li>
          <NavLink to="">Доставка</NavLink>
        <li>
          <NavLink to="">Контакти</NavLink>
        </li>
        <li>
          <NavLink to="">Корзина</NavLink>
        </li>
      </ul> */}
    </NavStyled>
  );
};
