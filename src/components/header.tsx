import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Header = () => {
  return (
    <div className="flex justify-between items-center w-[1200px] h-[60px] top-0 sticky">
      <div className="flex gap-[60px] items-center">
        <Link to="/" className="mr-[60px] font-bold text-lg no-underline text-black">
          Arete
        </Link>
        <Link to="/" className="no-underline text-black">
          Market
        </Link>
        <Link to="/dashboard" className="no-underline text-black">
          Dashboard
        </Link>
        <Link to="/" className="no-underline text-black">
          xKZA
        </Link>
        <Link to="/" className="no-underline text-black">
          Vote
        </Link>
        <Link to="/bribe" className="no-underline text-black">
          Bribe
        </Link>
      </div>
      <Button className="text-[14px] font-bold" type="primary">
        Connect Wallet
      </Button>
    </div>
  );
};

export default Header;
