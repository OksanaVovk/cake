import { Logo } from '../Logo/index';
import { Basket } from '../Basket/index';
import { Navigation1 } from '../Navigation1/index';
import { Navigation2 } from '../Navigation2/index';
import { HeaderBox, HeaderTextBox } from './Header.Styled';
// import { GlobalContainerStyled } from 'components/SharedLayout/GlobalContainer.styled';
export const Header = () => {
  return (
    // <GlobalContainerStyled>
    <HeaderBox>
      <HeaderTextBox>
        <Navigation1 />
        {/* <h1>Тут буде хедер</h1> */}
        <Logo />
        <Navigation2 />
        <Basket />
      </HeaderTextBox>
    </HeaderBox>
    // </GlobalContainerStyled>
  );
};
