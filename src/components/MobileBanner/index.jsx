import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const onBtnClick = () => {
    try {
      navigate('/catalog', { replace: true });
    } catch {
      console.log(Error);
    }
  };
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
        <Button
          type="button"
          text="ДО КАТАЛОГУ"
          w="355px"
          font="18px"
          onClick={onBtnClick}
        />
      </ButtonBox>
      <SocialBox>
        <SocialNetworks />
      </SocialBox>
    </MobileBannerBox>
  );
};
