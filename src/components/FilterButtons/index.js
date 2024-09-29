import { useDispatch } from 'react-redux';
import { filterProd } from '../../redux/productsSlice';
import { ButtonFilter, FilterBox, FilterItem } from './FilterButtons.styled';
export const FilterButtons = () => {
  const dispatch = useDispatch();
  const onBtnClick = event => {
    console.log(event.currentTarget.name);
    dispatch(filterProd(event.currentTarget.name));
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
