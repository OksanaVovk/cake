import sprite from '../../images/icons.svg';
import { useDispatch } from 'react-redux';
import { toggleOrder } from '../../redux/modalSlice';
import { useNavigate } from 'react-router-dom';
import mCake1x from '../../images/mCake1x.webp';
import mCake2x from '../../images/mCake2x.webp';
import {
  ModalSvg,
  ModalButton,
  ModalWindow,
  Img,
  ButtonLight,
  ButtonDark,
  Title,
  Text,
  ButtonBox,
} from './OrderSuccesModal.styled';
export const OrderSuccessModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onBtnClick = () => {
    try {
      dispatch(toggleOrder(false));
    } catch {
      console.log(Error);
    }
  };
  const onBtnLightClick = () => {
    try {
      dispatch(toggleOrder(false));
      navigate('/', { replace: true });
    } catch {
      console.log(Error);
    }
  };
  const onBtnDarkClick = () => {
    try {
      dispatch(toggleOrder(false));
      navigate('/catalog', { replace: true });
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
      <Img
        src={mCake1x}
        alt="cake"
        srcSet={`${mCake2x} 2x`}
        media="(min-width: 375px)"
      />
      <Title>Дякую за замовлення!</Title>
      <Text>
        Ваше замовлення прийняте в обробку та незабаром вам зателефонує менеджер
        для уточнення деталей
      </Text>
      <ButtonBox>
        <ButtonLight className="light" onClick={onBtnLightClick}>
          На головну
        </ButtonLight>
        <ButtonDark className="dark" onClick={onBtnDarkClick}>
          Продовжити покупки
        </ButtonDark>
      </ButtonBox>
    </ModalWindow>
  );
};
