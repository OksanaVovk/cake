// import { ButtonMore } from 'components/Button';
// import { Button } from 'components/Button';
import { ButtonMore } from 'components/Button';
import { ProductsBox, ProductBox, ButtonBox } from './Products.styled';
import Catalog1_1x from '../../images/1Catalog1x.webp';
import Catalog1_2x from '../../images/1Catalog2x.webp';
import Catalog2_1x from '../../images/2Catalog1x.webp';
import Catalog2_2x from '../../images/2Catalog2x.webp';
import Catalog3_1x from '../../images/3Catalog1x.webp';
import Catalog3_2x from '../../images/3Catalog2x.webp';
import Catalog4_1x from '../../images/4Catalog1x.webp';
import Catalog4_2x from '../../images/4Catalog2x.webp';

export const Products = () => {
  return (
    <>
      <ProductsBox>
        <ProductBox>
          <img alt="im" src={Catalog1_1x} srcSet={`${Catalog1_2x} 2x`} />
          <ButtonBox>
            <ButtonMore text="Торти" />
          </ButtonBox>
        </ProductBox>
        <ProductBox>
          <img alt="im" src={Catalog2_1x} srcSet={`${Catalog2_2x} 2x`} />
          <ButtonBox>
            <ButtonMore text="Шу" />
          </ButtonBox>
        </ProductBox>
        <ProductBox>
          <img alt="im" src={Catalog3_1x} srcSet={`${Catalog3_2x} 2x`} />
          <ButtonBox>
            <ButtonMore text="Тістечка" />
          </ButtonBox>
        </ProductBox>
        <ProductBox>
          <img alt="im" src={Catalog4_1x} srcSet={`${Catalog4_2x} 2x`} />
          <ButtonBox>
            <ButtonMore text="Піца" />
          </ButtonBox>
        </ProductBox>
      </ProductsBox>
    </>
  );
};
