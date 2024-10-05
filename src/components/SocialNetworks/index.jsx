import sprite from '../../images/icons.svg';
import {
  Link,
  LinkF,
  TelegramSvg,
  FacebookSvg,
  InstagramSvg,
  NetworksBox,
  NetworksBoxFooter,
  ViberSvg,
  InstagramFSvg,
  TelegramFSvg,
} from './SocialNetworks.styled';

export const SocialNetworks = () => {
  return (
    <NetworksBox>
      <Link to="https://web.telegram.org" target="_blank">
        <TelegramSvg>
          <use href={sprite + '#icon-Telegram'}></use>
        </TelegramSvg>
      </Link>
      <Link to="https://www.facebook.com/" target="_blank">
        <FacebookSvg>
          <use href={sprite + '#icon-Facebook'}></use>
        </FacebookSvg>
      </Link>
      <Link to="https://www.instagram.com/" target="_blank">
        <InstagramSvg>
          <use href={sprite + '#icon-Instagram'}></use>
        </InstagramSvg>
      </Link>
    </NetworksBox>
  );
};

export const SocialNetworksFooter = () => {
  return (
    <NetworksBoxFooter>
      <LinkF to="https://www.instagram.com/" target="_blank">
        <InstagramFSvg>
          <use href={sprite + '#icon-Instagram'}></use>
        </InstagramFSvg>
      </LinkF>
      <LinkF to="https://web.telegram.org" target="_blank">
        <TelegramFSvg>
          <use href={sprite + '#icon-Telegram'}></use>
        </TelegramFSvg>
      </LinkF>
      <LinkF to="https://www.viber.com/" target="_blank">
        <ViberSvg>
          <use href={sprite + '#icon-viber'}></use>
        </ViberSvg>
      </LinkF>
    </NetworksBoxFooter>
  );
};
