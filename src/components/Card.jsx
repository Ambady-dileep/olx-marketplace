import { convertToDate } from '../utils/convertdate';

const Card = ({ product }) => {
  const { name, price, address, createdAt, imageUrl } = product;
  const date = convertToDate(createdAt);
  return (
    <div className="p-3 sm:w-[290px] sm:h-[320px] w-[200px] h-[250px] border-1 border-gray-100 rounded-sm flex flex-col items-center shadow-sm">
      <img src={imageUrl} alt="" className="sm:h-[70%] h-[50%]" />
      <div className="details w-full">
        <h1 className="sm:text-lg text-md font-bold mt-2">{name}</h1>
        <h1 className="font-semibold mt-2">₹{price}</h1>
        <div className="flex text-sm font-semibold justify-between text-gray-500 mt-2">
          <p>{address.toUpperCase()}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
