import fon1x from '../../images/Fon1x.webp';
import fon2x from '../../images/Fon2x.webp';
import secondFon1x from '../../images/2fon1x.webp';
import secondFon2x from '../../images/2fon2x.webp';
import mFon1x from '../../images/mFon1x.webp';
import mFon2x from '../../images/mFon2x.webp';
import { BackgroundStyled, Img1, Img2, Img3 } from './MainBackground.styled';

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

      <Img3
        alt="im"
        src={mFon1x}
        srcSet={`${mFon2x} 2x`}
        media="(min-width: 375px)"
      />
      {children}
    </BackgroundStyled>
  );
};
