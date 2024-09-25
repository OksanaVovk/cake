import { LogoBig } from 'components/Logo';
import { SocialNetworksFooter } from 'components/SocialNetworks';
import {
  FooterBox,
  TextBox,
  Text,
  TextBox1,
  LogoBox,
  NavBox,
  FooterBoxP,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterBox>
      <FooterBoxP>
        <TextBox1 className="boxfooter" id="contacts">
          <Text>с. Хотів, вул. Партизанська </Text>
          <Text>Email: grannstady@gmail.com</Text>
          <p>Tel: +38(050)7777777</p>
        </TextBox1>
        <LogoBox>
          <LogoBig />
        </LogoBox>
        <NavBox>
          <SocialNetworksFooter />
        </NavBox>
        <TextBox>
          <Text>Політика конфіденційності</Text>
          <p>Договір оферти</p>
        </TextBox>
      </FooterBoxP>
    </FooterBox>
  );
};
