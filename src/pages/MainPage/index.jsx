import { MainBackground } from 'components/MainBackground';
import { MainBanner } from 'components/MainBanner';
import { Prodacts } from 'components/Prodacts';
import { MobileBanner } from 'components/MobileBanner';
import { Why } from 'components/Why';
import { BannerCake } from 'components/BannerCake';
import { Delivery } from 'components/Delivery';
import { AboutMe } from 'components/AboutMe';
import { WishForm } from 'components/WishForm';

const MainPage = () => {
  return (
    <>
      <MainBackground />
      <MobileBanner />
      <MainBanner />
      <Prodacts />
      <Why />
      <BannerCake />
      <Delivery />
      <AboutMe />
      <WishForm />
    </>
  );
};

export default MainPage;
