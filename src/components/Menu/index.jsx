import sprite from '../../images/icons.svg';
import { MenuButton, MenuSvg } from './Menu.styled';

export const Menu = () => {
  return (
    <MenuButton>
      <MenuSvg>
        <use href={sprite + '#icon-menu'}></use>
      </MenuSvg>
    </MenuButton>
  );
};
