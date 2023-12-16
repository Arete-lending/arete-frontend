import { Navigate, RouteObject } from 'react-router-dom';
import Layout from './layout';
import Market from './pages/market';
import Dashboard from './pages/dashboard';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Market />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" replace={true} />
  }
];

export default routes;
