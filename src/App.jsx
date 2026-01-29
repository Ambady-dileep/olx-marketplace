import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Footer from './components/Footer';
import Login from './components/Login/Login';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Sell from './components/Sell';
import { Protected } from './components/Protected';
import { ToastContainer } from 'react-toastify';
import Myads from './components/Myads';

const MyLayout = () => {
  return (
    <>
      <ToastContainer theme="dark" />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MyLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sell',
        element: (
          <Protected>
            <Sell />
          </Protected>
        ),
      },
      {
        path: '/myads',
        element: (
          <Protected>
            <Myads />
          </Protected>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default App;
