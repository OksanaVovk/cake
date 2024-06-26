import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
// import Loader from 'components/Loader/Loader';
import { GlobalContainerStyled } from './GlobalContainer.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header />

      {/* <Suspense fallback={<Loader />}> */}
      <Suspense fallback={<div>Loading...</div>}>
        <GlobalContainerStyled>
          <Outlet />
        </GlobalContainerStyled>
      </Suspense>
      <Footer />
    </>
  );
};
