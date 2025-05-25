import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import ApplyPage from '../pages/ApplyPage';
import Results from '../pages/Results';

function AppRoutes() {
  const AppRouter = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/applyjob',
          element: <ApplyPage />,
        },
        {
          path: '/thankyou',
          element: <Results />,
        },
      ],
    },
  ]);

  return <RouterProvider router={AppRouter} />;
}

export default AppRoutes;
