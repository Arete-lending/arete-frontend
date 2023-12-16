import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Header = () => {
  return (
    <div className="shadow-md top-0 sticky w-full flex justify-center">
      <div className="flex justify-between items-center w-[1200px] h-[60px]">
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
          <Link to="/vote" className="no-underline text-black">
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
    </div>
  );
};

export default Header;
