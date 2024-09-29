import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectors } from '../../redux/selectors';
import { filterProd } from '../../redux/productsSlice';
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
  const filterWord = useSelector(selectors.selectFilterWord);
  console.log(filterWord);
  const buttonsItems = document.querySelectorAll('button');
  console.log(buttonsItems);

  // useEffect(() => {
  //   const index = buttonsItems.findIndex(b => b.name === filterWord);
  //   buttonsItems[index].classList.add('active');
  // });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onBtnClick = event => {
    console.log(event.currentTarget.name);
    dispatch(filterProd(event.currentTarget.name));
    navigate(
      '/catalog',
      { replace: true },
      dispatch(filterProd(event.currentTarget.name))
    );
  };

  return (
    <>
      <ProductsBox>
        <ProductBox>
          <img alt="im" src={Catalog1_1x} srcSet={`${Catalog1_2x} 2x`} />
          <ButtonBox>
            <ButtonMore
              type="button"
              text="Торти"
              name="Торти"
              onClick={onBtnClick}
            />
          </ButtonBox>
        </ProductBox>
        <ProductBox>
          <img alt="im" src={Catalog2_1x} srcSet={`${Catalog2_2x} 2x`} />
          <ButtonBox>
            <ButtonMore
              type="button"
              text="Шу"
              name="Шу"
              onClick={onBtnClick}
            />
          </ButtonBox>
        </ProductBox>
        <ProductBox>
          <img alt="im" src={Catalog3_1x} srcSet={`${Catalog3_2x} 2x`} />
          <ButtonBox>
            <ButtonMore
              type="button"
              text="Тістечка"
              name="Тістечка"
              onClick={onBtnClick}
            />
          </ButtonBox>
        </ProductBox>
        <ProductBox>
          <img alt="im" src={Catalog4_1x} srcSet={`${Catalog4_2x} 2x`} />
          <ButtonBox>
            <ButtonMore
              type="button"
              text="Піца"
              name="Піца"
              onClick={onBtnClick}
            />
          </ButtonBox>
        </ProductBox>
      </ProductsBox>
    </>
  );
};
