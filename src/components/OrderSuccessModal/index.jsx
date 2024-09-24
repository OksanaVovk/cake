import sprite from '../../images/icons.svg';
import { useDispatch } from 'react-redux';
import { toggleOrder } from '../../redux/modalSlice';
import mCake1x from '../../images/mCake1x.webp';
import mCake2x from '../../images/mCake2x.webp';
import { ModalSvg, ModalButton, ModalWindow } from './OrderSuccesModal.styled';
export const OrderSuccessModal = () => {
  const dispatch = useDispatch();

  const onBtnClick = () => {
    try {
      dispatch(toggleOrder(false));
    } catch {
      console.log(Error);
    }
  };
  return (
    <ModalWindow>
      <img
        src={mCake1x}
        alt="cake"
        srcSet={`${mCake2x} 2x`}
        media="(min-width: 1440px)"
      />
      <ModalButton onClick={onBtnClick}>
        <ModalSvg>
          <use href={sprite + '#icon-close'}></use>
        </ModalSvg>
      </ModalButton>
    </ModalWindow>
  );
};
