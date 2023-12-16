import { Navigate, RouteObject } from 'react-router-dom';
import Layout from './layout';
import Market from './pages/market';
import Dashboard from './pages/dashboard';
import Bribe from './pages/bribe';
import Vote from './pages/vote';
import XATE from './pages/x-ate';

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
      },
      {
        path: '/bribe',
        element: <Bribe />
      },
      {
        path: '/vote',
        element: <Vote />
      },
      {
        path: '/xate',
        element: <XATE />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" replace={true} />
  }
];

export default routes;
