import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <div
      id="Footer"
      className="p-5 pl-[3%] pb-[5%] bg-gray-50 grid grid-cols-2 sm:grid-cols-5"
    >
      <ul>
        <li className="text-sm font-bold mb-3">POPULAR LOCATIONS</li>
        <li className="text-sm mb-1 text-[#8D90A1]">Kolkata</li>
        <li className="text-sm mb-1 text-[#8D90A1]">Chennai</li>
        <li className="text-sm mb-1 text-[#8D90A1]">Pune</li>
        <li className="text-sm mb-1 text-[#8D90A1]">Mumbai</li>
      </ul>
      <ul>
        <li className="text-sm font-bold mb-3">TRENDING LOCATIONS</li>
        <li className="text-sm mb-1 text-[#8D90A1]">Bhubaneshwar</li>
        <li className="text-sm mb-1 text-[#8D90A1]">Hyderabad</li>
        <li className="text-sm mb-1 text-[#8D90A1]">Chandigarh</li>
        <li className="text-sm mb-1 text-[#8D90A1]">Nashik</li>
      </ul>
      <ul>
        <li className="text-sm font-bold mb-3">About Us</li>
        <li className="text-sm mb-1 text-[#8D90A1]">Tech@OLX</li>
        <li className="text-sm mb-1 text-[#8D90A1]">Careers</li>
      </ul>
      <ul>
        <li className="text-sm font-bold mb-3">OLX</li>
        <li className="text-sm mb-1 text-[#8D90A1]">Blog</li>
        <li className="text-sm mb-1 text-[#8D90A1]">Help</li>
        <li className="text-sm mb-1 text-[#8D90A1]">Sitemap</li>
        <li className="text-sm mb-1 text-[#8D90A1]">
          Legal & Privacy information
        </li>
        <li className="text-sm mb-1 text-[#8D90A1]">
          Vulnerability Disclosure Program
        </li>
      </ul>
      <ul className="">
        <li className="text-sm font-bold mb-3">FOLLOW Us</li>
        <div className="flex gap-2 items-center">
          <li className="text-m mb-1 text-[#8D90A1]">
            <FaFacebook />
          </li>
          <li className="text-m mb-1 text-[#8D90A1]">
            <FaInstagram />
          </li>
          <li className="text-m mb-1 text-[#8D90A1]">
            <FaTwitter />
          </li>
          <li className="text-m mb-1 text-[#8D90A1]">
            <FaYoutube />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Footer;
