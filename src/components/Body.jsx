import Card from './Card';
import { useProduct } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const Body = () => {
  const { products, setProducts } = useProduct();
  return (
    <div className="w-full min-h-screen  p-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
      {products.map(product => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <Card product={product} />
        </Link>
      ))}
    </div>
  );
};

export default Body;
