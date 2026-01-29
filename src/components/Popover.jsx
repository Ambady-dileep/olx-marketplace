import { Popover } from 'flowbite-react';
import { logout } from '../utils/authentication';
import { useNavigate } from 'react-router-dom';

export function Popoverwrapper({ name, children }) {
  const navigate = useNavigate();
  return (
    <Popover
      aria-labelledby="default-popover"
      content={
        <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
          <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
            <h3
              id="default-popover"
              className="font-semibold text-gray-900 dark:text-white"
            >
              Hi, {name.toUpperCase()}
            </h3>
          </div>
          <div className="px-3 py-2">
            <p
              className="cursor-pointer mb-2 mt-5 hover:text-gray-800 transition-all"
              onClick={() => navigate('/myads')}
            >
              My Ads
            </p>
            <p
              onClick={logout}
              className="cursor-pointer mb-2 mt-5  hover:text-gray-800 transition-all"
            >
              Logout
            </p>
          </div>
        </div>
      }
    >
      {children}
    </Popover>
  );
}
