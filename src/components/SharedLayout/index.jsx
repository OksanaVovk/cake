import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { MainBackgroundImage } from 'components/MainBackground';
import { MainBackgroundGrey } from 'components/MainBackground/MainBackground.styled';
import Loader from 'components/Loader/Loader';
import { GlobalContainerStyled } from './GlobalContainer.styled';

export const SharedLayout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' ? (
        <>
          <MainBackgroundImage />
          <Header />
          <Suspense fallback={<Loader />}>
            <GlobalContainerStyled>
              <Outlet />
            </GlobalContainerStyled>
            <Footer />
          </Suspense>
        </>
      ) : (
        <MainBackgroundGrey>
          <Header />
          <Suspense fallback={<Loader />}>
            <GlobalContainerStyled>
              <Outlet />
            </GlobalContainerStyled>
            <Footer />
          </Suspense>
        </MainBackgroundGrey>
      )}
    </>
  );
};
