import AssetTable from '@/components/market/asset-table';

const Market = () => {
  return (
    <div>
      <div className="flex w-[1200px] gap-[60px] my-[60px]">
        <div>
          <div className="flex font-bold text-[48px] h-[60px] mb-[10px] items-end">123</div>
          <div className="text-[20px]">Total Value Locked</div>
        </div>
        <div>
          <div className="flex font-bold text-[36px] h-[60px] mb-[10px] items-end">123</div>
          <div className="text-[20px]">Total Borrows</div>
        </div>
        <div>
          <div className="flex font-bold text-[36px] h-[60px] mb-[10px] items-end">123</div>
          <div className="text-[20px]">Total Available</div>
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
