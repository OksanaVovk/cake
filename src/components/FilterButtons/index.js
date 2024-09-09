import { ButtonFilter, FilterBox, FilterItem } from './FilterButtons.styled';
export const FilterButtons = () => {
  return (
    <FilterBox>
      <FilterItem>
        <ButtonFilter>Торти</ButtonFilter>
      </FilterItem>
      <FilterItem>
        <ButtonFilter>Тістечка</ButtonFilter>
      </FilterItem>
      <FilterItem>
        <ButtonFilter>Шу</ButtonFilter>
      </FilterItem>
      <FilterItem>
        <ButtonFilter>Піца</ButtonFilter>
      </FilterItem>
    </FilterBox>
  );
};
