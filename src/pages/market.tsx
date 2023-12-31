import { getMarketHeader } from '@/apis/market';
import AssetTable from '@/components/market/asset-table';

const Market = () => {
  const marketHeader = getMarketHeader();
  return (
    <div className="overflow-auto w-full flex flex-col items-center pb-[60px]">
      <div className="flex w-[1200px] gap-[60px] my-[60px]">
        <div>
          <div className="flex font-bold text-[42px] h-[60px] mb-[10px] items-end">
            {marketHeader?.TVL}
          </div>
          <div className="text-[16px]">Total Value Locked</div>
        </div>
        <div>
          <div className="flex font-bold text-[32px] h-[60px] mb-[10px] items-end">
            {marketHeader?.TB}
          </div>
          <div className="text-[16px]">Total Borrows</div>
        </div>
        <div>
          <div className="flex font-bold text-[32px] h-[60px] mb-[10px] items-end">
            {marketHeader?.TA}
          </div>
          <div className="text-[16px]">Total Available</div>
        </div>
      </div>
      <div className="w-[1200px] py-[20px]">
        <div className="font-bold text-[36px] py-[24px]">Markets</div>
        <div className="font-bold text-[24px] py-[32px]">Single Assets</div>
      </div>
      <AssetTable />
    </div>
  );
};

export default Market;
