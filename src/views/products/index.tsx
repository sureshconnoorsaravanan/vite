import { useParams } from 'react-router-dom';

const Products = () => {
  const { id } = useParams();
  return <h2>Product ID: {id}</h2>;
};
export default Products
