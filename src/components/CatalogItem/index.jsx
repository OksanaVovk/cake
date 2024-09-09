import sprite from '../../images/icons.svg';
import {
  BasketSvg,
  ItemsName,
  ItemsText,
  BoxText,
  BoxGText,
  BoxImg,
  Img,
  BoxItem,
} from './CatalogItem.styled';
export const CatalogItem = ({
  picture1x,
  category,
  picture2x,
  name,
  number,
  price,
  unit,
}) => {
  return (
    <BoxItem>
      <BoxImg>
        <Img src={picture1x} alt={category} srcSet={`${picture2x} 2x`} />
      </BoxImg>
      {/* <ButtonItem className="buttonItem" text="Детальніше" /> */}

      <BoxGText>
        <BoxText>
          <ItemsName>{name}</ItemsName>
          <ItemsText>
            {number > 1
              ? `${price}грн/${number}${unit}`
              : `${price}грн/${unit}`}
          </ItemsText>
        </BoxText>
        <button>
          <BasketSvg>
            <use href={sprite + '#icon-Shopping-cart'}></use>
          </BasketSvg>
        </button>
      </BoxGText>
    </BoxItem>
  );
};
