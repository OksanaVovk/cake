import { LogoBox } from './LogoStyled';
import { Link } from 'react-router-dom';

import logoGrann_1x from '../../images/logoGrann_1x.webp';
import logoGrann_2x from '../../images/logoGrann_2x.webp';
import logoGrannBig_1x from '../../images/logoGrannBig_1x.webp';
import logoGrannBig_2x from '../../images/logoGrannBig_2x.webp';
import logoGrannMob_1x from '../../images/logoGrannMob_1x.webp';
import logoGrannMob_2x from '../../images/logoGrannMob_2x.webp';

export const Logo = () => {
  return (
    <Link to="/">
      <LogoBox>
        <picture>
          <source
            srcSet={`${logoGrann_1x} 1x, ${logoGrann_2x} 2x`}
            media="(min-width: 1440px)"
          />

          <source
            srcSet={`${logoGrannMob_1x} 1x, ${logoGrannMob_2x} 2x`}
            media="(min-width: 375px)"
          />
          <img src={logoGrannMob_1x} alt="Logotype" />
        </picture>
      </LogoBox>
    </Link>
  );
};

export const LogoBig = () => {
  return (
    <LogoBox>
      <picture>
        <source
          srcSet={`${logoGrannBig_1x} 1x, ${logoGrannBig_2x} 2x`}
          media="(min-width: 375px)"
        />

        <img src={logoGrannBig_1x} alt="Logotype" />
      </picture>
    </LogoBox>
  );
};
