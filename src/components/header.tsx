import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Header = () => {
  return (
    <div className="flex justify-between items-center w-[1200px] h-[60px]">
      <div className="flex gap-[60px] items-center">
        <div className="mr-[60px] font-bold text-lg">Arete</div>
        <Link to="/">Market</Link>
        <Link to="/">Dashboard</Link>
        <Link to="/">xKZA</Link>
        <Link to="/">Vote</Link>
        <Link to="/">Bribe</Link>
      </div>
      <Button className="text-[14px] font-bold" type="primary">
        Connect Wallet
      </Button>
    </div>
  );
};

export default Header;
