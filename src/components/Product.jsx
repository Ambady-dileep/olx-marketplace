import { useParams } from 'react-router-dom';
import { useProduct } from '../context/ProductContext';
import { convertToDate } from '../utils/convertdate';

const Product = () => {
  const { products } = useProduct();
  const { id } = useParams();
  const [findProduct] = products.filter(p => p.id == id);

  if (!findProduct) return <p>Loading...</p>;
  console.log(findProduct);
  const { name, price, address, createdAt, imageUrl, postedby, description } =
    findProduct;
  const date = convertToDate(createdAt);

  return (
    <div className="flex justify-center w-full min-h-screen p-10 px-[5%]">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start sm:h-[500px] shadow-lg">
        <div className="image w-1/2 h-full flex-1/2">
          <img src={imageUrl} className="w-full h-full object-contain" />
        </div>
        <div className="product-details flex-1/2 pt-10 px-5">
          <h1 className="text-2xl font-bold mb-2">{name}</h1>
          <h3 className="font-semibold mb-2 text-xl">₹{price}</h3>
          <p className="text-[#292929] mb-10 text-lg">{description}</p>
          <p className="text-[#8D90A1] mb-2">{address}</p>
          <p className="text-[#8D90A1] mb-2">Posted on {date}</p>
          <p className="text-[#8D90A1] mb-2">Posted by {postedby}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
