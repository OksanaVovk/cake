import fon1x from '../../images/Fon1x.webp';
import fon2x from '../../images/Fon2x.webp';
import secondFon1x from '../../images/2fon1x.webp';
import secondFon2x from '../../images/2fon2x.webp';
import mFon1x from '../../images/mFon1x.webp';
import mFon2x from '../../images/mFon2x.webp';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import {
  BackgroundStyled,
  Img1,
  Img2,
  Img3,
  BackgroundStyled2,
} from './MainBackground.styled';

export const MainBackgroundImage = ({ children }) => {
  // const location = useLocation();
  const divRef = useRef();
  console.log(divRef);

  // location.pathname !== '/'
  //   ? (divRef.style.display = 'none')
  //   : (divRef.style.display = 'block');

  return (
    <BackgroundStyled>
      <div ref={divRef}>
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
      </div>
      {children}
    </BackgroundStyled>
  );
};

export const MainBackgroundGrey = ({ children }) => {
  return <BackgroundStyled2>{children}</BackgroundStyled2>;
};

export const MainBackground = ({ children }) => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      {location.pathname === '/' ? (
        <MainBackgroundImage />
      ) : (
        <MainBackgroundGrey />
      )}
    </>
  );
};
