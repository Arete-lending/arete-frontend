import { Link } from 'react-router-dom';
import { Button, Tag } from 'antd';
import { useSDK } from '@metamask/sdk-react';

const Header = () => {
  const { sdk } = useSDK();

  const connectWallet = async () => {
    const accounts = await sdk?.connect();
    // TODO: choose account from accounts (current: picks the first one)
    localStorage.setItem('account', (accounts as string[])?.[0]);
  };

  const account = localStorage.getItem('account');

  return (
    <div className="shadow-md top-0 sticky w-full flex justify-center bg-white">
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
          <Link to="/xate" className="no-underline text-black">
            xATE
          </Link>
          <Link to="/vote" className="no-underline text-black">
            Vote
          </Link>
          <Link to="/bribe" className="no-underline text-black">
            Bribe
          </Link>
        </div>
        {account ? (
          <Tag className="w-[120px] text-ellipsis overflow-hidden whitespace-nowrap">{account}</Tag>
        ) : (
          <Button className="text-[14px] font-bold" type="primary" onClick={connectWallet}>
            Connect Wallet
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
