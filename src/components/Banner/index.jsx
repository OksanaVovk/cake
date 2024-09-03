import cream1x from '../../images/Cream1x.webp';
import cream2x from '../../images/Cream2x.webp';
import eclair from '../../images/Eclair.webp';
import mousse from '../../images/Mousse.webp';

import tart from '../../images/Tart.webp';

import sprite from '../../images/icons.svg';
import {
  CreamBox,
  BannerBox,
  TitleBox,
  Title,
  CreamImg,
  CreamSvg1,
  CreamSvg2,
  EclairBox,
  EclairSvg1,
  EclairImg,
  EclairSvg2,
  EclairText,
  MousseBox,
  MousseImg,
  MousseText,
  TartBox,
  TartImg,
  TartSvg1,
  TartSvg2,
  TartSvg3,
  TartSvg4,
  TartText,
  TextBox,
  Text,
} from './Banner.styled';

export const Banner = () => {
  return (
    <BannerBox>
      <TitleBox>
        <Title>Авторські десерти</Title>
      </TitleBox>
      <CreamBox>
        <CreamImg
          src={cream1x}
          alt="cream"
          srcSet={`${cream2x} 2x`}
          media="(min-width: 1440px)"
        />
        <CreamSvg1>
          <use href={sprite + '#icon-cream1'}></use>
        </CreamSvg1>
        <CreamSvg2>
          <use href={sprite + '#icon-cream2'}></use>
        </CreamSvg2>
      </CreamBox>
      <EclairBox>
        <EclairText>заварні шу</EclairText>
        <EclairImg
          src={eclair}
          alt="eclair"
          srcSet={`${eclair} 2x`}
          media="(min-width: 1440px)"
        />
        <EclairSvg1>
          <use href={sprite + '#icon-eclair1'}></use>
        </EclairSvg1>
        <EclairSvg2>
          <use href={sprite + '#icon-eclair2'}></use>
        </EclairSvg2>
      </EclairBox>
      <MousseBox>
        <MousseText>мусові торти</MousseText>
        <MousseImg
          src={mousse}
          alt="mousse"
          srcSet={`${mousse} 2x`}
          media="(min-width: 1440px)"
        />
      </MousseBox>
      <TartBox>
        <TartText>апетитні тарти</TartText>
        <TartImg
          src={tart}
          alt="tart"
          srcSet={`${tart} 2x`}
          media="(min-width: 1440px)"
        />
        <TartSvg1>
          <use href={sprite + '#icon-tart1'}></use>
        </TartSvg1>
        <TartSvg2>
          <use href={sprite + '#icon-tart2'}></use>
        </TartSvg2>
        <TartSvg3>
          <use href={sprite + '#icon-tart3'}></use>
        </TartSvg3>
        <TartSvg4>
          <use href={sprite + '#icon-tart4'}></use>
        </TartSvg4>
      </TartBox>
      <TextBox>
        <Text>Виготовляємо десерти під замовлення з любов’ю та користю</Text>
      </TextBox>
    </BannerBox>
  );
};
