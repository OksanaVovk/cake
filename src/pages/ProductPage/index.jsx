import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux/selectors';
import { NavCatalog } from 'components/NavCatalog';
import { ProductCard } from 'components/ProductCard';
import { ProductPageBox } from './ProductPage.styled';
import { AboutProduct } from 'components/AboutProduct';
import { Random } from 'components/Random';
import Loader from 'components/Loader/Loader';

const ProductPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  const { id } = useParams();
  const products = useSelector(selectors.selectProductsBase);
  const product = products.find(product => product.id === Number(id));
  return (
    <>
      {isLoading && <Loader />}
      <ProductPageBox>
        <NavCatalog id={product.id} name={product.name} />
        <ProductCard
          name={product.name}
          picture1x={product.picture1x}
          picture2x={product.picture2x}
          category={product.category}
          unit={product.unit}
          price={product.price}
          number={product.number}
          id={product.id}
        />
        <AboutProduct desctiption={product.desctiption} />
        <Random _id={product.id} />
      </ProductPageBox>
    </>
  );
};

export default ProductPage;
