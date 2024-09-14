import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { MainBackgroundImage } from 'components/MainBackground';
import { MainBackgroundGrey } from 'components/MainBackground/MainBackground.styled';
// import Loader from 'components/Loader/Loader';
import { GlobalContainerStyled } from './GlobalContainer.styled';

export const SharedLayout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' ? (
        <>
          <MainBackgroundImage />
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <GlobalContainerStyled>
              <Outlet />
            </GlobalContainerStyled>
          </Suspense>
          <Footer />
        </>
      ) : (
        <MainBackgroundGrey>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <GlobalContainerStyled>
              <Outlet />
            </GlobalContainerStyled>
          </Suspense>
          <Footer />
        </MainBackgroundGrey>
      )}
    </>
  );
};
