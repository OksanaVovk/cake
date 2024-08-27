import { MainBackground } from 'components/MainBackground';
import { MainBanner } from 'components/MainBanner';
import { Prodacts } from 'components/Prodacts';

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
      <MainBanner />
      <Prodacts />
      <h1>HELLO UKRAINE</h1>
    </div>
  );
};

export default MainPage;
