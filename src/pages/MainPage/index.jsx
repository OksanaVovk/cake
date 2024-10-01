import { useEffect, useState } from 'react';
import { MainBanner } from 'components/MainBanner';
import { Products } from 'components/Products';
import { MobileBanner } from 'components/MobileBanner';
import { Why } from 'components/Why';
import { BannerCake } from 'components/BannerCake';
import { Delivery } from 'components/Delivery';
import { AboutMe } from 'components/AboutMe';
import { WishForm } from 'components/WishForm';
import { Question } from 'components/Question';
import Loader from 'components/Loader/Loader';
import { MainPageBox } from './MainPage.styled';

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <MobileBanner />
      <MainBanner />
      <MainPageBox>
        <Products />
        <Why />
        <BannerCake />
        <Delivery />
        <AboutMe />
        <WishForm />
        <Question />
      </MainPageBox>
    </>
  );
};

export default MainPage;
