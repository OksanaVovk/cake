import fon1x from '../../images/Fon1x.webp';
import fon2x from '../../images/Fon2x.webp';
import secondFon1x from '../../images/2fon1x.webp';
import secondFon2x from '../../images/2fon2x.webp';
import { BackgroundStyled, Img1, Img2 } from './MainBackground.styled';

export const MainBackground = ({ children }) => {
  return (
    <BackgroundStyled>
      <Img1
        alt="im"
        src={fon1x}
        srcSet={`${fon2x} 2x`}
        media="(min-width: 1440px)"
      />
      <Img2
        alt="im"
        src={secondFon1x}
        srcSet={`${secondFon2x} 2x`}
        media="(min-width: 1440px)"
      />

      {/* <Img3
        alt="im"
        src={fon1x}
        srcSet={`${fon2x} 2x`}
        media="(min-width: 1440px)"
      /> */}
      {children}
    </BackgroundStyled>
  );
};
