import { Navigate, RouteObject } from 'react-router-dom';
import Layout from './layout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <></>
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" replace={true} />
  }
];

export default routes;
