import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectors } from '../../redux/selectors';
import { filterProd } from '../../redux/productsSlice';
import { ButtonFilter, FilterBox, FilterItem } from './FilterButtons.styled';
export const FilterButtons = () => {
  const filterWord = useSelector(selectors.selectFilterWord);

  const dispatch = useDispatch();

  useEffect(() => {
    const buttons = document.querySelectorAll('button');

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    document.querySelector(`[name="${filterWord}"]`).classList.add('active');

    // return () => {
    //   document
    //     .querySelector(`[name="${filterWord}"]`)
    //     .classList.remove('active');
    // };
  }, [filterWord]);

  const onBtnClick = event => {
    dispatch(filterProd(event.currentTarget.name));
    console.log(event.currentTarget);
  };
  return (
    <FilterBox>
      <FilterItem>
        <ButtonFilter type="button" name="Торти" onClick={onBtnClick}>
          Торти
        </ButtonFilter>
      </FilterItem>
      <FilterItem>
        <ButtonFilter type="button" name="Тістечка" onClick={onBtnClick}>
          Тістечка
        </ButtonFilter>
      </FilterItem>
      <FilterItem>
        <ButtonFilter type="button" name="Шу" onClick={onBtnClick}>
          Шу
        </ButtonFilter>
      </FilterItem>
      <FilterItem>
        <ButtonFilter type="button" name="Піца" onClick={onBtnClick}>
          Піца
        </ButtonFilter>
      </FilterItem>
    </FilterBox>
  );
};
