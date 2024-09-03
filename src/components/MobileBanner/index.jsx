import mbanner1x from '../../images/mbanner1x.webp';
import mbanner2x from '../../images/mbanner2x.webp';
import { SocialNetworks } from 'components/SocialNetworks';
import { Button } from 'components/Button';
import {
  MobileBannerBox,
  MobileBannerImg,
  ButtonBox,
  SocialBox,
  Title,
  Text,
} from './MobileBanner.styled';

export const MobileBanner = () => {
  return (
    <MobileBannerBox>
      <Title>GRANN</Title>
      <Text>Авторські десерти</Text>
      <MobileBannerImg
        src={mbanner1x}
        alt="cream"
        srcSet={`${mbanner2x} 2x`}
        media="(min-width: 375px)"
      />
      <ButtonBox>
        <Button text="ДО КАТАЛОГУ" w="355px" />
      </ButtonBox>
      <SocialBox>
        <SocialNetworks />
      </SocialBox>
    </MobileBannerBox>
  );
};
