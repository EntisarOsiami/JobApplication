import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../layout/Layout";
import Application from "../components/ApplyForm";

function AppRoutes() {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Application />,
        },
        {
          path: "/application",
          element: <div>Application</div>,
        },
        {
          path: "/about",
          element: <div>About</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={AppRouter} />;
}

export default AppRoutes;
