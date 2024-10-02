import { Logo } from '../Logo/index';
import { Menu } from 'components/Menu';
import { Basket } from '../Basket/index';
import { Navigation1 } from '../Navigation1/index';
import { Navigation2 } from '../Navigation2/index';
import { HeaderBox, HeaderTextBox, HeaderTextBoxSmall } from './Header.styled';

export const Header = () => {
  return (
    <HeaderBox>
      <HeaderTextBox>
        <Navigation1 />
        <Logo />
        <HeaderTextBoxSmall>
          <Navigation2 />
          <Menu />
          <Basket />
        </HeaderTextBoxSmall>
      </HeaderTextBox>
    </HeaderBox>
  );
};
