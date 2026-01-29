import { RiAdvertisementFill } from 'react-icons/ri';
import { useProduct } from '../context/ProductContext';
import { useUser } from '../context/UserContext';
import Card from './Card';
import { TbMoodEmptyFilled } from 'react-icons/tb';

const Myads = () => {
  const { products } = useProduct();
  const { currentUser } = useUser();
  const userName = currentUser.displayName;
  const myads = products.filter(
    p => p.postedby.toLowerCase() == userName.toLowerCase()
  );
  console.log(myads);
  return (
    <div className="myads min-h-screen w-full py-5 px-7 ">
      <div className="heading flex gap-1 items-center mb-5">
        <h1 className="text-2xl font-bold">MY ADS</h1>
        <RiAdvertisementFill className="text-2xl mt-1" />
      </div>
      {myads.length == 0 ? (
        <Empty />
      ) : (
        <div className="cards grid grid-cols-4 gap-5">
          {myads.map(ad => (
            <Card key={ad.id} product={ad} />
          ))}
        </div>
      )}
    </div>
  );
};

const Empty = () => {
  return (
    <div className="w-full  flex-col flex items-center justify-center mt-10">
      <TbMoodEmptyFilled className="animate-bounce text-5xl" />
      <h1 className="mt-2 text-xl font-bold">No Ads posted yet!</h1>
    </div>
  );
};
export default Myads;
