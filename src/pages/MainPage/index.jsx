import { MainBackground } from 'components/MainBackground';
import { MainBanner } from 'components/MainBanner';
import { Prodacts } from 'components/Prodacts';
import { MobileBanner } from 'components/MobileBanner';

const MainPage = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <MainBackground />
      <MobileBanner />
      <MainBanner />
      <Prodacts />
    </div>
  );
};

export default MainPage;
