import sprite from '../../images/icons.svg';
import { Link } from 'react-router-dom';
import { BasketSvg } from './Basket.Styled';

export const Basket = () => {
  return (
    <nav>
      <Link to="/basket">
        <BasketSvg>
          <use href={sprite + '#icon-Shopping-cart'}></use>
        </BasketSvg>
      </Link>
    </nav>
  );
};
