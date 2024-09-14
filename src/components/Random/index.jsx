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
        {randomData.map(image => (
          <CatalogItem
            className="randomItem"
            id={image.id}
            key={image.id}
            picture1x={image.picture1x}
            picture2x={image.picture2x}
            category={image.category}
            name={image.name}
            number={image.number}
            price={image.price}
            unit={image.unit}
          />
        ))}
      </CardList>
    </RandomDiv>
  );
};
