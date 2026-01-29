import { FaSearch, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Popoverwrapper } from './Popover';
import { useUser } from '../context/UserContext';

const Navbar = () => {
  console.log('Navbar loaded');
  const navigate = useNavigate();
  const { currentUser, loading } = useUser();
  console.log('current user', currentUser, currentUser?.displayName);
  const name = currentUser?.displayName || '';
  console.log(name);
  const nickName = name ? name.slice(0, 2).toUpperCase() : 'AB';

  return (
    <div className="flex gap-5 p-4 py-2 items-center bg-[#EFF1F3] ">
      <img
        className="w-[50px] cursor-pointer"
        src="https://statics.olx.in/external/base/img/olxLogo/olx_logo_2025.svg"
        alt="Logo"
        onClick={() => navigate('/')}
      />
      <select
        name=""
        id=""
        className="bg-white border-2 border-black pl-2 py-1 pr-[4] sm:pl-4 sm:pr-[14%] sm:py-3 rounded-sm"
      >
        <option value="India">India</option>
      </select>
      <div className="search-box  justify-center items-center sm:flex hidden">
        <input
          type="text"
          className="bg-white border-2 border-black py-3 px-2 w-[450px] rounded-l-sm "
          placeholder="Find Cars,Mobiles Phones and more..."
        />
        <div>
          <div className="h-[52px] w-[52px] bg-black flex justify-center items-center border-y-2 border-r-2 border-black rounded-r-sm cursor-pointer">
            <FaSearch color="white" />
          </div>
        </div>
      </div>
      <select name="" id="" className="cursor-pointer font-semibold text-md">
        <option value="English">ENGLISH</option>
      </select>
      <FaRegHeart className="font-bold text-2xl cursor-pointer" />
      {!currentUser || loading ? (
        <p
          className="cursor-pointer font-bold underline"
          onClick={() => navigate('/login')}
        >
          Login
        </p>
      ) : (
        <Popoverwrapper name={name}>
          <div className="rounded-full w-10 h-10 bg-black text-white flex items-center justify-center cursor-pointer">
            <p>{nickName}</p>
          </div>
        </Popoverwrapper>
      )}

      <button
        className="cursor-pointer w-25 h-10  sm:w-32 sm:h-12 border-4 border-l-amber-300 border-t-blue-400 border-r-black border-b-green-400 rounded-full flex items-center justify-center"
        onClick={() => navigate('/sell')}
      >
        <span className="font-extrabold text-[30px] pb-1">+</span>
        <span className="font-bold text-[16px]">SELL</span>
      </button>
    </div>
  );
};

export default Navbar;
