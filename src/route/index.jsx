import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../page/HomePage";
import ErrorPage from "../component/Error/Error";
import Company from "../page/Company";
import Service from "../page/Service";
import Career from "../page/Career";
import Contact from "../component/Career/Contact";
import News from "../page/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/Company',
        element: <Company  />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/Service',
        element: <Service  />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/Career',
        element: <Career  />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/Contact',
        element: <Contact  />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/News',
        element: <News  />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
export default router;
