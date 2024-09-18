import {
  ModalWindow,
  ModalButton,
  ModalSvg,
  ModalTitle,
} from './BasketModal.styled';
import sprite from '../../images/icons.svg';

export const BasketModal = () => {
  return (
    <ModalWindow>
      <div>
        <ModalTitle>Ваше замовлення:</ModalTitle>
        <ModalButton>
          <ModalSvg>
            <use href={sprite + '#icon-close'}></use>
          </ModalSvg>
        </ModalButton>
      </div>
      <p>Тут баскет модал</p>
    </ModalWindow>
  );
};
