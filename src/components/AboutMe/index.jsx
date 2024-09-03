import sprite from '../../images/icons.svg';
import about1x from '../../images/about1x.webp';
import about2x from '../../images/about2x.webp';
import mAbout1x from '../../images/mabout1x.webp';
import mAbout2x from '../../images/mabout2x.webp';

import {
  AboutMeBox,
  AboutMeImg1,
  AboutMeImg2,
  AboutMeSvg,
  TextTitle,
  Title,
  TextBox,
  LittleText,
  Text,
} from './AboutMe.styled';

export const AboutMe = () => {
  return (
    <AboutMeBox>
      <Title>Про мене</Title>
      <AboutMeImg1
        src={about1x}
        alt="woman"
        srcSet={`${about2x} 2x`}
        media="(min-width: 1440px)"
      />
      <AboutMeImg2
        src={mAbout1x}
        alt="woman"
        srcSet={`${mAbout2x} 2x`}
        media="(min-width:375px)"
      />
      <AboutMeSvg>
        <use href={sprite + '#icon-name'}></use>
      </AboutMeSvg>
      <TextBox>
        <TextTitle>Анна Кострома</TextTitle>
        <LittleText>Засновниця кондитерської Grann Pastry</LittleText>
        <Text>
          Від хобі до власної справи.<br></br>
          <br></br> Я закінчила DGF International Culinary School в Києві, а
          згодом навчалася в одній з найвідоміших шкіл готельного сервісу і
          кулінарії в світі «Le Cordon Bleu» (Франція).Свою справу почала після
          того, як здобула досвід і працювала в одному з найбільших
          кондитерських цехів Грузії (1500 кв.м.).<br></br>
          <br></br> Наразі започаткувала особистий бренд і будую власний
          кондитерський цех.Моя робота мене надихає. Завдяки моїм солодощам, я
          можу дарувати щасливі моменти для вас!
        </Text>
      </TextBox>
    </AboutMeBox>
  );
};
