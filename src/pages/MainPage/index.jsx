import { MainBackground } from 'components/MainBackground';
import { MainBanner } from 'components/MainBanner';
import { Prodacts } from 'components/Prodacts';
import { MobileBanner } from 'components/MobileBanner';
import { Why } from 'components/Why';

const MainPage = () => {
  return (
    <>
      <MainBackground />
      <MobileBanner />
      <MainBanner />
      <Prodacts />
      <Why />
    </>
  );
};

export default MainPage;
