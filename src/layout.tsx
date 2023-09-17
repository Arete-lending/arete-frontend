import { Outlet } from 'react-router-dom';
import Header from './components/header';

const Layout = () => {
  return (
    <div className="flex justify-center">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
