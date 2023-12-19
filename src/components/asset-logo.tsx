import Dai from '@/assets/dai.svg';
import Link from '@/assets/link.svg';
import Usdc from '@/assets/usdc.svg';
import Wbtc from '@/assets/wbtc.svg';
import Weth from '@/assets/weth.svg';
import Usdt from '@/assets/usdt.svg';

const LOGO = {
  DAI: <img src={Dai} alt="DAI" className="w-[30px] h-[30px]" />,
  LINK: <img src={Link} alt="LINK" className="w-[30px] h-[30px]" />,
  USDC: <img src={Usdc} alt="USDC" className="w-[30px] h-[30px]" />,
  WBTC: <img src={Wbtc} alt="WBTC" className="w-[30px] h-[30px]" />,
  WETH: <img src={Weth} alt="WETH" className="w-[30px] h-[30px]" />,
  USDT: <img src={Usdt} alt="USDT" className="w-[30px] h-[30px]" />
};

const AssetLogo = ({ asset }: { asset: string }) => {
  return (
    <div className="flex gap-[15px] items-center justify-center">
      {LOGO[asset as keyof typeof LOGO]}
      <p className="w-[50px] flex justify-left">{asset}</p>
    </div>
  );
};

export default AssetLogo;
