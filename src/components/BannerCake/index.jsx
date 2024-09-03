import cake1x from '../../images/cake1x.webp';
import cake2x from '../../images/cake2x.webp';
import mCake1x from '../../images/mCake1x.webp';
import mCake2x from '../../images/mCake2x.webp';
import { Img1, Img2, BannerCakeBox } from './BannerCake.styled';

export const BannerCake = () => {
  return (
    <BannerCakeBox>
      <Img1
        alt="im"
        src={cake1x}
        srcSet={`${cake2x} 2x`}
        media="(min-width: 1440px)"
      />

      <Img2
        alt="im"
        src={mCake1x}
        srcSet={`${mCake2x} 2x`}
        media="(min-width: 375px)"
      />
    </BannerCakeBox>
  );
};
