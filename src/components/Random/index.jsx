import { useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';

import { CatalogItem } from 'components/CatalogItem';
import { RandomDiv, Title, CardList } from './Random.styled';

export const Random = ({ _id }) => {
  const data = useSelector(selectors.selectProductsBase);

  const randomData = [];

  for (let i = 0; i < 4; i += 1) {
    let randomItem = data[Math.floor(Math.random() * data.length)];
    !randomData.includes(randomItem) && randomItem.id !== _id
      ? randomData.push(randomItem)
      : (i -= 1);
  }

  return (
    <RandomDiv>
      <Title>Також можете спробувати:</Title>
      <CardList>
        {randomData.map(prod => (
          <CatalogItem
            className="randomItem"
            id={prod.id}
            key={prod.id}
            picture1x={prod.picture1x}
            picture2x={prod.picture2x}
            category={prod.category}
            name={prod.name}
            number={prod.number}
            price={prod.price}
            unit={prod.unit}
          />
        ))}
      </CardList>
    </RandomDiv>
  );
};
