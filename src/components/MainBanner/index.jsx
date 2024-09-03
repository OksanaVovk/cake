import { Banner } from 'components/Banner';
import { SocialNetworks } from 'components/SocialNetworks';
import { MainBannerBox, SocialBox } from './MainBanner.styled';

export const MainBanner = () => {
  return (
    <MainBannerBox>
      <Banner />
      <SocialBox>
        <SocialNetworks />
      </SocialBox>
    </MainBannerBox>
  );
};
