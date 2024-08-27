// import sprite from '../../images/icons.svg';
import { StyledButton2, SvgMore, SvgBox, ButtonTextBox } from './ButtonStyled';
import sprite from '../../images/icons.svg';

// export const Button = () => {
//   return (
//     <>
//       <button type="button">Кнопка</button>;
//     </>
//   );
// };

export const Button = ({
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
  <StyledButton2
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
  </StyledButton2>
);

export const ButtonMore = ({ text }) => (
  <StyledButton2>
    <ButtonTextBox>
      {text}
      <SvgBox>
        <SvgMore>
          <use href={sprite + '#icon-arrow'}></use>
        </SvgMore>
      </SvgBox>
    </ButtonTextBox>
  </StyledButton2>
);
