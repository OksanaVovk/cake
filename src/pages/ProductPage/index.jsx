import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectors } from '../../redux/selectors';

const ProductPage = () => {
  const { id } = useParams();
  // const products = useSelector(selectors.selectProductsBase);
  // const product = products.find(product => product.id === id);
  return (
    <>
      <h1>{id}</h1>
    </>
  );
};

export default ProductPage;
