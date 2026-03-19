import { convertToDate } from '../utils/convertdate';

const Card = ({ product }) => {
  const { name, price, address, createdAt, imageUrl } = product;
  const date = convertToDate(createdAt);
  return (
    <div className="p-3 sm:w-[290px] sm:h-[320px] w-[200px] h-[250px] border border-gray-100 rounded-sm flex flex-col items-center shadow-sm overflow-hidden">
      <img src={imageUrl} alt={name} className="sm:h-[55%] h-[45%] w-full object-cover" />
      <div className="details w-full overflow-hidden flex flex-col flex-1">
        <h1 className="sm:text-lg text-md font-bold mt-2 truncate">{name}</h1>
        <h1 className="font-black mt-1">₹{price}</h1>
        <div className="flex text-sm font-semibold justify-between text-gray-500 mt-2 gap-2 items-start">
          <p className="break-words min-w-0 leading-tight">{address.toUpperCase()}</p>
          <p className="shrink-0">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;