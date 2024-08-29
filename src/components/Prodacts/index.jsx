// import { ButtonMore } from 'components/Button';
// import { Button } from 'components/Button';
import { ButtonMore } from 'components/Button';
import { ProdactsBox, ProdactBox, ButtonBox } from './Prodacts.Styled';
import Catalog1_1x from '../../images/1Catalog1x.webp';
import Catalog1_2x from '../../images/1Catalog2x.webp';
import Catalog2_1x from '../../images/2Catalog1x.webp';
import Catalog2_2x from '../../images/2Catalog2x.webp';
import Catalog3_1x from '../../images/3Catalog1x.webp';
import Catalog3_2x from '../../images/3Catalog2x.webp';
import Catalog4_1x from '../../images/4Catalog1x.webp';
import Catalog4_2x from '../../images/4Catalog2x.webp';

// const Button = () => {
//   return <button type="button">Кнопка</button>;
// };

export const Prodacts = () => {
  return (
    <>
      <ProdactsBox>
        <ProdactBox>
          <img alt="im" src={Catalog1_1x} srcSet={`${Catalog1_2x} 2x`} />
          <ButtonBox>
            <ButtonMore text="Торти" />
          </ButtonBox>
        </ProdactBox>
        <ProdactBox>
          <img alt="im" src={Catalog2_1x} srcSet={`${Catalog2_2x} 2x`} />
          <ButtonBox>
            <ButtonMore text="Шу" />
          </ButtonBox>
        </ProdactBox>
        <ProdactBox>
          <img alt="im" src={Catalog3_1x} srcSet={`${Catalog3_2x} 2x`} />
          <ButtonBox>
            <ButtonMore text="Тістечка" />
          </ButtonBox>
        </ProdactBox>
        <ProdactBox>
          <img alt="im" src={Catalog4_1x} srcSet={`${Catalog4_2x} 2x`} />
          <ButtonBox>
            <ButtonMore text="Піца" />
          </ButtonBox>
        </ProdactBox>
      </ProdactsBox>
    </>
  );
};
