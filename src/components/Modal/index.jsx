import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBasket, toggleOrder, toggleMenu } from '../../redux/modalSlice';
import { selectors } from '../../redux/selectors';
import { Backdrop } from './Modal.styled';
import { BasketModal } from 'components/BasketModal';
import { OrderSuccessModal } from 'components/OrderSuccessModal';
import { MenuModal } from 'components/MenuModal';

const modalRoot = document.querySelector('#modal-root');

export const Modal = () => {
  const dispatch = useDispatch();
  const basketModal = useSelector(selectors.selectBasketModal);
  const successfulOrder = useSelector(selectors.selectSuccessfulOrder);
  const mobileMenu = useSelector(selectors.selectMobileMenu);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        switch (true) {
          case basketModal:
            dispatch(toggleBasket(false));
            break;
          case successfulOrder:
            dispatch(toggleOrder(false));
            break;
          case mobileMenu:
            dispatch(toggleMenu(false));
            break;
          default:
            return;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      switch (true) {
        case basketModal:
          dispatch(toggleBasket(false));
          break;
        case successfulOrder:
          dispatch(toggleOrder(false));
          break;
        case mobileMenu:
          dispatch(toggleMenu(false));
          break;
        default:
          return;
      }
    }
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      {basketModal && <BasketModal />}
      {successfulOrder && <OrderSuccessModal />}
      {mobileMenu && <MenuModal />}
    </Backdrop>,
    modalRoot
  );
};
