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
      <Link>
        <TelegramSvg>
          <use href={sprite + '#icon-Telegram'}></use>
        </TelegramSvg>
      </Link>
      <Link>
        <FacebookSvg>
          <use href={sprite + '#icon-Facebook'}></use>
        </FacebookSvg>
      </Link>
      <Link>
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
      <LinkF>
        <InstagramFSvg>
          <use href={sprite + '#icon-Instagram'}></use>
        </InstagramFSvg>
      </LinkF>
      <LinkF>
        <TelegramFSvg>
          <use href={sprite + '#icon-Telegram'}></use>
        </TelegramFSvg>
      </LinkF>
      <LinkF>
        <ViberSvg>
          <use href={sprite + '#icon-viber'}></use>
        </ViberSvg>
      </LinkF>
    </NetworksBoxFooter>
  );
};
