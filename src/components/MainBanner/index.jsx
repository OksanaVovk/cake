import { Banner } from 'components/Banner';
import { SocialNetworks } from 'components/SocialNetworks';
import { MainBannerBox, SocialBox } from './MainBanner.Styled';

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
