import { Banner } from 'components/Banner';
import { SocialNetworks } from 'components/SocialNetworks';
import { MainBannerBox } from './MainBanner.Styled';

export const MainBanner = () => {
  return (
    <MainBannerBox>
      <Banner />
      <SocialNetworks />
    </MainBannerBox>
  );
};
