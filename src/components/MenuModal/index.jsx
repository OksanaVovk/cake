import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../redux/modalSlice';
import sprite from '../../images/icons.svg';
import mCakeW1x from '../../images/mCakeW1x.webp';
import mCakeW2x from '../../images/mCakeW2x.webp';
import {
  ModalWindow,
  ModalButton,
  ModalSvg,
  Img,
  Link,
  LinkItem,
  List,
} from './MenuModal.styled';
export const MenuModal = () => {
  const dispatch = useDispatch();

  const onBtnClick = () => {
    try {
      dispatch(toggleMenu(false));
    } catch {
      console.log(Error);
    }
  };
  return (
    <ModalWindow>
      <ModalButton onClick={onBtnClick}>
        <ModalSvg>
          <use href={sprite + '#icon-close'}></use>
        </ModalSvg>
      </ModalButton>
      <List>
        <LinkItem>
          <Link to="/catalog" onClick={onBtnClick}>
            Каталог
          </Link>
        </LinkItem>
        <LinkItem>
          <Link smooth to="/#delivery" onClick={onBtnClick}>
            Доставка
          </Link>
        </LinkItem>
        <LinkItem>
          <Link smooth to="/#aboutme" onClick={onBtnClick}>
            Про мене
          </Link>
        </LinkItem>
      </List>
      <Img
        src={mCakeW1x}
        alt="cake"
        srcSet={`${mCakeW2x} 2x`}
        media="(min-width: 375px)"
      />
    </ModalWindow>
  );
};
