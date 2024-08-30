import sprite from '../../images/icons.svg';
import {
  Link,
  TelegramSvg,
  FacebookSvg,
  InstagramSvg,
  NetworksBox,
} from './SocialNetworks.Styled';

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
