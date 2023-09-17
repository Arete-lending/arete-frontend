import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between items-center w-[1200px] h-[60px]">
      <div className="flex gap-[60px]">
        <div className="mr-[60px] font-bold">Yohoho~~~</div>
        <Link to="/">Market</Link>
        <Link to="/">Dashboard</Link>
        <Link to="/">Rewards</Link>
        <Link to="/">Vote</Link>
        <Link to="/">Bribe</Link>
      </div>
      <button className="bg-lime-300 px-3 py-2 rounded-lg text-[14px] font-bold">
        Connect Wallet
      </button>
    </div>
  );
};

export default Header;
