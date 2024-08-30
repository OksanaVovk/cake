import sprite from '../../images/icons.svg';
import why1x from '../../images/Why1x.webp';
import why2x from '../../images/Why2x.webp';
import {
  Title,
  WhyImg,
  WhySvg1,
  WhySvg2,
  WhySvg3,
  TextTitle,
  Text,
  WhyBox,
  BoxText1,
  BoxText2,
  BoxText3,
} from '../../components/Why/Why.Styled';
export const Why = () => {
  return (
    <WhyBox>
      <Title>Чому саме Grann?</Title>
      <WhyImg
        src={why1x}
        alt="cream"
        srcSet={`${why2x} 2x`}
        media="(min-width: 1440px)"
      />
      <WhySvg1>
        <use href={sprite + '#icon-why1'}></use>
      </WhySvg1>
      <WhySvg2>
        <use href={sprite + '#icon-why2'}></use>
      </WhySvg2>
      <WhySvg3>
        <use href={sprite + '#icon-why3'}></use>
      </WhySvg3>
      <BoxText1>
        <TextTitle>ВСІ ІНГРЕДІЄНТИ СВІЖІ ТА ЯКІСНІ!</TextTitle>
        <Text font-size="18px">
          Я замовляю продукти тільки у тих постачальників, які мають сертифікати
          якості.
        </Text>
      </BoxText1>
      <BoxText2>
        <TextTitle>МОЖЛИВІСТЬ ЗАМОВИТИ ДЕСЕРТ ЗГІДНО ВАШИХ ПОБАЖАННЬ</TextTitle>
        <Text>
          Якщо з якихось причин ви не <br></br>вживаєте окремі продукти
          <br></br>десерту , є можливість зробити <br></br>замовлення згідно
          ваших
          <br></br>
          побажаннь.
        </Text>
      </BoxText2>
      <BoxText3>
        <TextTitle>ЗРУЧНА ВАГА ТОРТУ</TextTitle>
        <Text>
          Не обов'язково чекати на свято, щоб замовити смачненьке. Наша
          кондитерська робить мініторти і десерти. <br></br>
          <br></br>Мінімальна вага замовлення:Наполеон і медовик - від 0,5
          кг.Мусові торти - від 0,8 кг.
        </Text>
      </BoxText3>
    </WhyBox>
  );
};
