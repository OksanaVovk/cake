import {
  StyledButton,
  SvgMore,
  SvgBox,
  ButtonTextBox,
  ButtonMoreB,
} from './Button.styled';
import sprite from '../../images/icons.svg';

export const Button = ({
  className,
  text,
  type,
  color,
  bg,
  w,
  h,
  font,
  radius,
  sh,
  shHov,
  hoverCange,
}) => (
  <StyledButton
    className={className}
    type={type || 'button'}
    color={color}
    bg={bg}
    width={w}
    height={h}
    font={font}
    radius={radius}
    shadow={sh}
    colorHover={bg}
    bgHover={color}
    shadowHover={shHov}
    hoverCange={hoverCange}
  >
    {text}
  </StyledButton>
);

export const ButtonMore = ({ text, name, onClick }) => (
  <ButtonMoreB
    className="buttonmore"
    type="button"
    name={name}
    onClick={onClick}
  >
    <ButtonTextBox>
      {text}
      <SvgBox>
        <SvgMore>
          <use href={sprite + '#icon-arrow'}></use>
        </SvgMore>
      </SvgBox>
    </ButtonTextBox>
  </ButtonMoreB>
);
