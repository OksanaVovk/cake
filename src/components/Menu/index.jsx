import sprite from '../../images/icons.svg';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../redux/modalSlice';
import { MenuButton, MenuSvg } from './Menu.styled';

export const Menu = () => {
  const dispatch = useDispatch();

  const onBtnClick = () => {
    try {
      dispatch(toggleMenu(true));
    } catch {
      console.log(Error);
    }
  };
  return (
    <MenuButton onClick={onBtnClick}>
      <MenuSvg>
        <use href={sprite + '#icon-menu'}></use>
      </MenuSvg>
    </MenuButton>
  );
};
